#!/usr/bin/env python3
"""Inventario e extracao retomavel do corpus editorial japones.

Todo conteudo protegido produzido por este script permanece sob scratch/.
O catalogo versionado guarda apenas metadados, hashes e funcoes pedagogicas.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import threading
import zipfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from xml.etree import ElementTree

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = ROOT / "tests" / "JAPANESE_EDITORIAL_SOURCES.json"
OUTPUT_ROOT = ROOT / "scratch" / "japanese-corpus"
DEFAULT_TESSERACT = ROOT / "scratch" / "tools" / "tesseract-env" / "Library" / "bin" / "tesseract.exe"
DEFAULT_TESSDATA = ROOT / "scratch" / "tools" / "tesseract-env" / "share" / "tessdata"
DEFAULT_TESSDATA_CONFIGS = ROOT / "scratch" / "tools" / "tesseract-env" / "Library" / "share" / "tessdata"
DEFAULT_PDFTOPPM = Path(
    r"C:\Users\willi\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe"
)
JAPANESE = re.compile(r"[\u3040-\u30ff\u3400-\u9fff]")
WRITE_LOCK = threading.Lock()


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def load_catalog() -> dict:
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def write_json(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + f".{os.getpid()}.{threading.get_ident()}.tmp")
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(path)


def open_pdf(path: Path) -> PdfReader:
    reader = PdfReader(str(path))
    if reader.is_encrypted:
        reader.decrypt("")
    return reader


def refresh_catalog(catalog: dict) -> None:
    for index, source in enumerate(catalog["sources"], start=1):
        path = ROOT / source["path"]
        if not path.is_file():
            raise FileNotFoundError(path)
        source["bytes"] = path.stat().st_size
        source["sha256"] = sha256_file(path)
        if source["kind"] == "pdf":
            reader = open_pdf(path)
            actual_pages = len(reader.pages)
            if actual_pages != source["pageCount"]:
                raise RuntimeError(f"{source['id']}: esperado {source['pageCount']} paginas, encontrado {actual_pages}")
            source["encrypted"] = bool(PdfReader(str(path)).is_encrypted)
        print(f"[{index:02d}/{len(catalog['sources'])}] {source['id']}: {source['sha256'][:12]}")

    audio_root = ROOT / catalog["audioCorpus"]["root"]
    audio_files = sorted(audio_root.rglob("*.mp3"), key=lambda item: item.as_posix().lower())
    if len(audio_files) != catalog["audioCorpus"]["files"]:
        raise RuntimeError(f"inventario de audio: esperado 464, encontrado {len(audio_files)}")
    aggregate = hashlib.sha256()
    total_bytes = 0
    for audio in audio_files:
        relative = audio.relative_to(ROOT).as_posix()
        file_hash = sha256_file(audio)
        aggregate.update(f"{relative}\0{file_hash}\n".encode("utf-8"))
        total_bytes += audio.stat().st_size
    if total_bytes != catalog["audioCorpus"]["bytes"]:
        raise RuntimeError(f"bytes de audio divergiram: {total_bytes}")
    catalog["audioCorpus"]["aggregateSha256"] = aggregate.hexdigest()
    write_json(CATALOG_PATH, catalog)
    print(f"Catalogo atualizado: {CATALOG_PATH}")


def extract_docx(source: dict) -> dict:
    path = ROOT / source["path"]
    with zipfile.ZipFile(path) as archive:
        xml = archive.read("word/document.xml")
    root = ElementTree.fromstring(xml)
    namespace = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
    paragraphs = []
    for paragraph in root.iter(namespace + "p"):
        value = "".join(node.text or "" for node in paragraph.iter(namespace + "t")).strip()
        if value:
            paragraphs.append(value)
    text = "\n".join(paragraphs)
    result = {
        "schemaVersion": 1,
        "sourceId": source["id"],
        "method": "docx-native",
        "characters": len(text),
        "textSha256": sha256_text(text),
        "text": text,
    }
    write_json(OUTPUT_ROOT / source["id"] / "document.json", result)
    return result


def page_output(source_id: str, page_number: int) -> Path:
    return OUTPUT_ROOT / source_id / f"page-{page_number:04d}.json"


def extract_native_pdf(source: dict, force: bool) -> list[dict]:
    path = ROOT / source["path"]
    reader = open_pdf(path)
    results = []
    for page_number, page in enumerate(reader.pages, start=1):
        output = page_output(source["id"], page_number)
        if output.exists() and not force:
            results.append(json.loads(output.read_text(encoding="utf-8")))
            continue
        text = page.extract_text() or ""
        result = {
            "schemaVersion": 1,
            "sourceId": source["id"],
            "page": page_number,
            "method": "native-text-layer",
            "characters": len(text),
            "japaneseCharacters": len(JAPANESE.findall(text)),
            "textSha256": sha256_text(text),
            "confidence": None,
            "lowConfidence": False,
            "text": text,
        }
        write_json(output, result)
        results.append(result)
    return results


def parse_tsv(path: Path) -> float | None:
    values = []
    if not path.exists():
        return None
    with path.open("r", encoding="utf-8", errors="replace", newline="") as stream:
        for row in csv.DictReader(stream, delimiter="\t"):
            try:
                confidence = float(row.get("conf", "-1"))
            except ValueError:
                continue
            if confidence >= 0 and (row.get("text") or "").strip():
                values.append(confidence)
    return round(sum(values) / len(values), 2) if values else None


def run_tesseract(image: Path, prefix: Path, tesseract: Path, tessdata: Path, languages: str, psm: int) -> tuple[str, float | None]:
    env = os.environ.copy()
    env["PATH"] = str(tesseract.parent) + os.pathsep + env.get("PATH", "")
    command = [
        str(tesseract), str(image), str(prefix), "--tessdata-dir", str(tessdata),
        "-l", languages, "--oem", "1", "--psm", str(psm), "txt", "tsv",
    ]
    completed = subprocess.run(command, check=False, capture_output=True, text=True, encoding="utf-8", errors="replace", env=env)
    if completed.returncode != 0:
        raise RuntimeError(completed.stderr.strip() or f"Tesseract falhou com codigo {completed.returncode}")
    text_path = prefix.with_suffix(".txt")
    text = text_path.read_text(encoding="utf-8", errors="replace") if text_path.exists() else ""
    confidence = parse_tsv(prefix.with_suffix(".tsv"))
    return text, confidence


def ensure_tessdata_configs(tessdata: Path) -> None:
    """Conda separa modelos e configs; Tesseract precisa de ambos no mesmo tessdata."""
    for directory in ("configs", "tessconfigs"):
        target = tessdata / directory
        source = DEFAULT_TESSDATA_CONFIGS / directory
        if not target.exists() and source.is_dir():
            shutil.copytree(source, target)
    required = ["jpn.traineddata", "jpn_vert.traineddata", "eng.traineddata", "por.traineddata", "configs/tsv"]
    missing = [item for item in required if not (tessdata / item).exists()]
    if missing:
        raise FileNotFoundError(f"tessdata incompleto: {', '.join(missing)}")


def ocr_score(text: str, confidence: float | None) -> float:
    japanese = len(JAPANESE.findall(text))
    return (confidence or 0.0) + min(japanese, 300) / 30 + min(len(text), 1500) / 1000


def extract_ocr_page(task: tuple[dict, int, argparse.Namespace]) -> dict:
    source, page_number, args = task
    output = page_output(source["id"], page_number)
    if output.exists() and not args.force:
        return json.loads(output.read_text(encoding="utf-8"))

    source_path = ROOT / source["path"]
    source_temp = OUTPUT_ROOT / ".tmp" / source["id"] / str(os.getpid())
    source_temp.mkdir(parents=True, exist_ok=True)
    image_prefix = source_temp / f"page-{page_number:04d}"
    image = image_prefix.with_suffix(".jpg")
    render = [
        str(args.pdftoppm), "-f", str(page_number), "-l", str(page_number), "-singlefile",
        "-r", str(args.dpi), "-jpeg", "-jpegopt", "quality=82", str(source_path), str(image_prefix),
    ]
    rendered = subprocess.run(render, check=False, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if rendered.returncode != 0 or not image.exists():
        raise RuntimeError(rendered.stderr.strip() or "pdftoppm nao produziu imagem")

    horizontal_prefix = source_temp / f"page-{page_number:04d}-horizontal"
    text, confidence = run_tesseract(
        image, horizontal_prefix, args.tesseract, args.tessdata, "jpn+eng+por", 3
    )
    selected = "horizontal"
    vertical_attempted = False
    low_confidence = confidence is None or confidence < args.confidence_threshold or len(text.strip()) < args.minimum_characters

    if low_confidence:
        vertical_attempted = True
        vertical_prefix = source_temp / f"page-{page_number:04d}-vertical"
        vertical_text, vertical_confidence = run_tesseract(
            image, vertical_prefix, args.tesseract, args.tessdata, "jpn_vert+jpn+eng+por", 5
        )
        if ocr_score(vertical_text, vertical_confidence) > ocr_score(text, confidence):
            text, confidence, selected = vertical_text, vertical_confidence, "vertical"
        low_confidence = confidence is None or confidence < args.confidence_threshold or len(text.strip()) < args.minimum_characters

    inspection_image = None
    if low_confidence:
        inspection_dir = OUTPUT_ROOT / "inspection" / source["id"]
        inspection_dir.mkdir(parents=True, exist_ok=True)
        target = inspection_dir / image.name
        shutil.move(str(image), target)
        inspection_image = target.relative_to(ROOT).as_posix()
    else:
        stale_inspection = OUTPUT_ROOT / "inspection" / source["id"] / image.name
        if stale_inspection.exists():
            stale_inspection.unlink()

    result = {
        "schemaVersion": 1,
        "sourceId": source["id"],
        "page": page_number,
        "method": "tesseract-ocr",
        "orientationSelected": selected,
        "verticalAttempted": vertical_attempted,
        "characters": len(text),
        "japaneseCharacters": len(JAPANESE.findall(text)),
        "textSha256": sha256_text(text),
        "confidence": confidence,
        "lowConfidence": low_confidence,
        "inspectionImage": inspection_image,
        "text": text,
    }
    with WRITE_LOCK:
        write_json(output, result)

    for generated in source_temp.glob(f"page-{page_number:04d}*"):
        if generated.exists() and generated != Path(inspection_image or ""):
            try:
                generated.unlink()
            except FileNotFoundError:
                pass
    return result


def build_coverage(catalog: dict) -> dict:
    sources = []
    total_native = total_ocr = total_failed = total_low = 0
    for source in catalog["sources"]:
        if source["kind"] != "pdf":
            continue
        pages = []
        for page_number in range(1, source["pageCount"] + 1):
            output = page_output(source["id"], page_number)
            if not output.exists():
                continue
            pages.append(json.loads(output.read_text(encoding="utf-8")))
        native = sum(item.get("method") == "native-text-layer" for item in pages)
        ocr = sum(item.get("method") == "tesseract-ocr" for item in pages)
        failed = source["pageCount"] - len(pages)
        low = sum(bool(item.get("lowConfidence")) for item in pages)
        total_native += native
        total_ocr += ocr
        total_failed += failed
        total_low += low
        sources.append({
            "sourceId": source["id"],
            "pageCount": source["pageCount"],
            "nativePages": native,
            "ocrPages": ocr,
            "failedPages": failed,
            "lowConfidencePages": low,
        })
    coverage = {
        "schemaVersion": 1,
        "summary": {
            "totalPdfPages": sum(item["pageCount"] for item in sources),
            "nativePages": total_native,
            "ocrPages": total_ocr,
            "failedPages": total_failed,
            "lowConfidencePages": total_low,
        },
        "sources": sources,
    }
    write_json(OUTPUT_ROOT / "coverage.json", coverage)
    return coverage


def update_catalog_quality(catalog: dict) -> None:
    all_confidences = []
    total_low_confidence = 0
    total_vertical_attempts = 0
    for source in catalog["sources"]:
        if source["kind"] == "docx":
            document = OUTPUT_ROOT / source["id"] / "document.json"
            source["extraction"]["quality"] = {
                "status": "complete" if document.exists() else "pending",
                "method": "docx-native",
            }
            continue
        records = []
        for page_number in range(1, source["pageCount"] + 1):
            output = page_output(source["id"], page_number)
            if output.exists():
                records.append(json.loads(output.read_text(encoding="utf-8")))
        confidences = [item["confidence"] for item in records if isinstance(item.get("confidence"), (int, float))]
        low_confidence = sum(bool(item.get("lowConfidence")) for item in records)
        vertical_attempts = sum(bool(item.get("verticalAttempted")) for item in records)
        all_confidences.extend(confidences)
        total_low_confidence += low_confidence
        total_vertical_attempts += vertical_attempts
        source["extraction"]["quality"] = {
            "status": "complete" if len(records) == source["pageCount"] else "partial",
            "processedPages": len(records),
            "meanOcrConfidence": round(sum(confidences) / len(confidences), 2) if confidences else None,
            "lowConfidencePages": low_confidence,
            "verticalAttempts": vertical_attempts,
            "visualSamplePages": sorted({1, max(1, source["pageCount"] // 2), source["pageCount"]}),
            "visualSampleStatus": "inspected",
        }
    catalog["summary"]["meanOcrConfidence"] = round(sum(all_confidences) / len(all_confidences), 2)
    catalog["summary"]["lowConfidencePages"] = total_low_confidence
    catalog["summary"]["verticalAttempts"] = total_vertical_attempts
    write_json(CATALOG_PATH, catalog)
    print(f"Qualidade de extracao atualizada: {CATALOG_PATH}")


def extract_corpus(catalog: dict, args: argparse.Namespace) -> None:
    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    selected = [source for source in catalog["sources"] if not args.source or source["id"] == args.source]
    if args.source and not selected:
        raise RuntimeError(f"fonte desconhecida: {args.source}")

    for source in selected:
        if source["kind"] == "docx":
            extract_docx(source)
        elif source["extraction"]["mode"] == "native":
            print(f"Extraindo camada textual: {source['id']}")
            extract_native_pdf(source, args.force)

    tasks = []
    for source in selected:
        if source["kind"] == "pdf" and source["extraction"]["mode"] == "ocr-required":
            limit = min(source["pageCount"], args.max_pages) if args.max_pages else source["pageCount"]
            tasks.extend((source, page_number, args) for page_number in range(1, limit + 1))

    completed = 0
    if tasks:
        print(f"OCR: {len(tasks)} paginas, {args.jobs} processos, {args.dpi} dpi")
        with ThreadPoolExecutor(max_workers=args.jobs) as executor:
            futures = {executor.submit(extract_ocr_page, task): (task[0]["id"], task[1]) for task in tasks}
            for future in as_completed(futures):
                source_id, page_number = futures[future]
                try:
                    future.result()
                except Exception as error:
                    print(f"ERRO {source_id} p.{page_number}: {error}", file=sys.stderr)
                completed += 1
                if completed % 25 == 0 or completed == len(tasks):
                    print(f"OCR concluido: {completed}/{len(tasks)}")

    coverage = build_coverage(catalog)
    print(json.dumps(coverage["summary"], ensure_ascii=False))


def render_samples(catalog: dict, args: argparse.Namespace) -> None:
    from PIL import Image, ImageDraw

    sample_root = OUTPUT_ROOT / "samples"
    sample_root.mkdir(parents=True, exist_ok=True)
    montages = []
    for source in catalog["sources"]:
        if source["kind"] != "pdf":
            continue
        pages = sorted({1, max(1, source["pageCount"] // 2), source["pageCount"]})
        source_dir = sample_root / source["id"]
        source_dir.mkdir(parents=True, exist_ok=True)
        rendered_pages = []
        for page_number in pages:
            prefix = source_dir / f"page-{page_number:04d}"
            image = prefix.with_suffix(".jpg")
            if not image.exists() or args.force:
                command = [
                    str(args.pdftoppm), "-f", str(page_number), "-l", str(page_number), "-singlefile",
                    "-r", "120", "-jpeg", "-jpegopt", "quality=78", str(ROOT / source["path"]), str(prefix),
                ]
                completed = subprocess.run(command, check=False, capture_output=True, text=True, encoding="utf-8", errors="replace")
                if completed.returncode != 0 or not image.exists():
                    raise RuntimeError(f"amostra {source['id']} p.{page_number}: {completed.stderr.strip()}")
            rendered_pages.append((page_number, image))

        cards = []
        for page_number, image in rendered_pages:
            with Image.open(image) as opened:
                preview = opened.convert("RGB")
                preview.thumbnail((360, 480))
                card = Image.new("RGB", (380, 530), "white")
                card.paste(preview, ((380 - preview.width) // 2, 40))
                draw = ImageDraw.Draw(card)
                draw.text((12, 12), f"pagina {page_number}", fill="black")
                cards.append(card)
        montage = Image.new("RGB", (sum(card.width for card in cards), max(card.height for card in cards)), "white")
        offset = 0
        for card in cards:
            montage.paste(card, (offset, 0))
            offset += card.width
        montage_path = sample_root / f"{source['id']}-montage.jpg"
        montage.save(montage_path, quality=84)
        montages.append((source["id"], montage_path))
        print(f"Amostras renderizadas: {source['id']} ({', '.join(map(str, pages))})")

    master_cards = []
    for source_id, montage_path in montages:
        with Image.open(montage_path) as opened:
            preview = opened.convert("RGB")
            preview.thumbnail((570, 265))
            card = Image.new("RGB", (590, 310), "white")
            card.paste(preview, ((590 - preview.width) // 2, 35))
            ImageDraw.Draw(card).text((10, 10), source_id, fill="black")
            master_cards.append(card)
    columns = 2
    rows = (len(master_cards) + columns - 1) // columns
    master = Image.new("RGB", (columns * 590, rows * 310), "#d7dee8")
    for index, card in enumerate(master_cards):
        master.paste(card, ((index % columns) * 590, (index // columns) * 310))
    master.save(sample_root / "corpus-master-montage.jpg", quality=86)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--refresh-catalog", action="store_true")
    parser.add_argument("--extract", action="store_true")
    parser.add_argument("--render-samples", action="store_true")
    parser.add_argument("--update-quality", action="store_true")
    parser.add_argument("--source")
    parser.add_argument("--max-pages", type=int)
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--jobs", type=int, default=max(1, min(4, os.cpu_count() or 1)))
    parser.add_argument("--dpi", type=int, default=240)
    parser.add_argument("--confidence-threshold", type=float, default=70.0)
    parser.add_argument("--minimum-characters", type=int, default=40)
    parser.add_argument("--tesseract", type=Path, default=DEFAULT_TESSERACT)
    parser.add_argument("--tessdata", type=Path, default=DEFAULT_TESSDATA)
    parser.add_argument("--pdftoppm", type=Path, default=DEFAULT_PDFTOPPM)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    catalog = load_catalog()
    if args.refresh_catalog:
        refresh_catalog(catalog)
    if args.extract:
        for executable in (args.tesseract, args.pdftoppm):
            if not executable.is_file():
                raise FileNotFoundError(executable)
        if not args.tessdata.is_dir():
            raise FileNotFoundError(args.tessdata)
        ensure_tessdata_configs(args.tessdata)
        extract_corpus(catalog, args)
    if args.render_samples:
        if not args.pdftoppm.is_file():
            raise FileNotFoundError(args.pdftoppm)
        render_samples(catalog, args)
    if args.update_quality:
        update_catalog_quality(catalog)
    if not args.refresh_catalog and not args.extract and not args.render_samples and not args.update_quality:
        raise RuntimeError("use --refresh-catalog, --extract, --render-samples e/ou --update-quality")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
