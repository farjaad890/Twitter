import React from "react";
import "../login/login.scss";
import { Link, useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import Hashplus from "../hashplus/hashplus";
import Main from "../main/main";
import { useLocation } from "react-router-dom";

const DonationBox = () => {
  const location = useLocation();
  console.log(location.state.id);
  return (
    <div id="hashDonationBox">
      <h1>Donation box</h1>
      <div className="login-box">
        <h2>{location.state.name}</h2>
        {/* <form> */}
        <div className="user-box">
          <input name="username" type="text" placeholder="Amount"></input>
        </div>
        <button className="btn__submit">Donate</button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default DonationBox;
