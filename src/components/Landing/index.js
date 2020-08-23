import React, { useRef, useEffect, useState } from "react";

const Landing = () => {
  const [btn, setBtn] = useState(false);

  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const displayLeftClaws = () => {
    refWolverine.current.classList.add("leftImg");
  };

  const displayRightClaws = () => {
    refWolverine.current.classList.add("rightImg");
  };

  const hideClaws = () => {
    if (refWolverine.current.classList.contains("leftImg")) {
      refWolverine.current.classList.remove("leftImg");
    } else if (refWolverine.current.classList.contains("rightImg")) {
      refWolverine.current.classList.remove("rightImg");
    }
  };

  const displayBtn = btn && (
    <>
      <div
        className="leftBox"
        onMouseOver={displayLeftClaws}
        onMouseOut={hideClaws}
      >
        <button className="btn-welcome">Inscription</button>
      </div>
      <div
        className="rightBox"
        onMouseOver={displayRightClaws}
        onMouseOut={hideClaws}
      >
        <button className="btn-welcome">Connexion</button>
      </div>
    </>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
