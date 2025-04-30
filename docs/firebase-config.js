// firebase-config.js
// Configuration Firebase pour le portfolio

// Import des fonctions nécessaires de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnmCeyh5bkJxk1_tN3c70ikYVIeM6F_qc",
  authDomain: "portfolio-cherif.firebaseapp.com",
  projectId: "portfolio-cherif",
  storageBucket: "portfolio-cherif.firebasestorage.app",
  messagingSenderId: "177393585689",
  appId: "1:177393585689:web:a5d22ec96986327092e488",
  measurementId: "G-H1NJ3P2WCL"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporter les fonctions et objets nécessaires
export { auth, db, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, doc, updateDoc, deleteDoc };
