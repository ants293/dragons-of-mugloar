import React from "react";
import loseGif from "../../assets/images/AAron.gif";
import {Link} from "react-router-dom";

function LoseView() {
  return (
    <div className="h-full d-flex justify-content-center align-items-center flex-column">
      <h1>Game over!</h1>
      <div>
        <img
          style={{ height: 300 }}
          src={loseGif}
          alt="AAAron"
        />
      </div>

      <Link to={"/play"}>Back home</Link>
    </div>
  );
}

export default LoseView;
