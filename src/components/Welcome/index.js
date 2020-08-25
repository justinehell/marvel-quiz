import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../Firebase";

import Logout from "../Logout";
import Quiz from "../Quiz";

const Welcome = (props) => {
  const [userSession, setUserSession] = useState(null);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push("/");
    });

    return () => {
      listener();
    };
  }, []);

  return userSession === null ? (
    <>
      <div className="loader">
        <p className="loaderText">load</p>
      </div>
    </>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz />
      </div>
    </div>
  );
};

export default Welcome;
