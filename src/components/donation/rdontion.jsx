import React from "react";
import { useLocation } from "react-router-dom";
import "../login/login.scss";

const RDonationBox = () => {
  const location = useLocation();
  console.log(location.state.name);
  return (
    <div>
      <h1>Donation box</h1>
      <div className="login-box">
        <h2>Donation box</h2>
        <form>
          <div className="user-box">
            <input name="username" type="text" placeholder="Amount"></input>
          </div>
          <button className="btn__submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default RDonationBox;
