import app from "firebase/app";

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
  }
}

export default Firebase;
