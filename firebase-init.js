// ==========================================
// JAPÃO ACADEMY - FIREBASE INITIALIZATION
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Substitua com as suas credenciais reais copiadas no Console do Firebase (Opção CDN)
const firebaseConfig = {
    apiKey: "AIzaSyDMgflbvMrMwEIf_4dCflX1O7WUMxbNwVM",
    authDomain: "japaoacademy-6d674.firebaseapp.com",
    projectId: "japaoacademy-6d674",
    storageBucket: "japaoacademy-6d674.firebasestorage.app",
    messagingSenderId: "818743020637",
    appId: "1:818743020637:web:b40ec93dbb22ebb89251b4",
    measurementId: "G-VMVE59YXX8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Expõe globalmente no escopo 'window' para o app.js utilizar
window.jaFirebase = {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    doc,
    setDoc,
    getDoc
};

console.log("🔥 Firebase inicializado com sucesso no Japão Academy!");


