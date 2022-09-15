import React from "react";
import Ftweets from "../ftweets/ftweets";
import "./explorer.scss";

const Explorer = () => {
  return (
    <div className="Homepage">
      <div className="homepage-heading">Explorer</div>
      <br></br>
      <Ftweets tweet={{}}></Ftweets>
      <Ftweets tweet={{}}></Ftweets>
      <Ftweets tweet={{}}></Ftweets>
    </div>
  );
};

export default Explorer;
