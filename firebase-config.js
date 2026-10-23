// Paste your own Firebase settings here (Firebase console > Project settings > Your apps).
// If sign-in ever says "API key not valid", copy this block again from the console and replace it.
export const firebaseConfig = {
  apiKey: "AIzaSyACmLKqhpe3bD2Kr4ZBFHRT0msOUTTVl5U",
  authDomain: "cafe-komorebi.firebaseapp.com",
  projectId: "cafe-komorebi",
  storageBucket: "cafe-komorebi.firebasestorage.app",
  messagingSenderId: "167956072886",
  appId: "1:167956072886:web:112861da1fa3815f9ad917"
};

// The owner logs in with this email and a password you create in Firebase > Authentication > Users.
// If you change it here, change it in firestore.rules too.
export const OWNER_EMAIL = "owner@cafe-komorebi.app";
