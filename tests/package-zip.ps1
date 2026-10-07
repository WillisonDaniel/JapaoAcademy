$sourceDir = "d:\Documentos\Japones\WIP"
$zipFile = "d:\Documentos\Japones\W.I.P.zip"

if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipFile, [System.IO.Compression.ZipArchiveMode]::Create)

$allFiles = Get-ChildItem -Path $sourceDir -Recurse -File

$count = 0
foreach ($file in $allFiles) {
    $rel = $file.FullName.Substring($sourceDir.Length + 1)
    if ($rel -notmatch '^(livros|scratch)(\\|$)' -and $rel -notmatch '^\.git(\\|$)') {
        $entryName = "W.I.P/" + $rel.Replace('\', '/')
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
        $count++
    }
}

$zip.Dispose()
Write-Host "Zip created successfully with $count files. Size: $((Get-Item $zipFile).Length) bytes"
