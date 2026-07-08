// ============================================================
// REPLACE THIS with the config object from your Firebase project.
//
// How to get it:
// 1. Go to https://console.firebase.google.com
// 2. Create a project (or open an existing one)
// 3. Click the "</>" (web app) icon to register a web app
// 4. Firebase will show you a config object like the one below —
//    copy/paste it here, replacing everything inside firebaseConfig.
// 5. In the Firebase console, go to Build > Firestore Database
//    and click "Create database" (start in test mode is fine
//    while you're building — see README.md for production rules).
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyB01Capm3wadPK3WCJSPcsX74Zyu3mdAYY",
  authDomain: "qbl-classroom.firebaseapp.com",
  projectId: "qbl-classroom",
  storageBucket: "qbl-classroom.firebasestorage.app",
  messagingSenderId: "420799560920",
  appId: "1:420799560920:web:699995c44c50d7d3612bad"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


