import app from "firebase/app";
import "firebase/auth"; // implémenter l'API d'authentification
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBb48UG_GO_eomVPXE1dYQ-USf31aXSXrQ",
  authDomain: "marvel-quiz-9053a.firebaseapp.com",
  databaseURL: "https://marvel-quiz-9053a.firebaseio.com",
  projectId: "marvel-quiz-9053a",
  storageBucket: "marvel-quiz-9053a.appspot.com",
  messagingSenderId: "162926272530",
  appId: "1:162926272530:web:8128db8a84016dbaeaf8cb",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth(); // implémenter l'API d'authentification
    this.db = app.firestore();
  }

  // Partie Authentification
  // inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // déconnexion
  signoutUser = () => this.auth.signOut();

  // Récupérer le mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  // Partie BDD via firestore
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
