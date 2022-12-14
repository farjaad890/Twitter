import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import "./hashplus.scss";
import { render } from "@testing-library/react";
import DonationBox from "../donation/donation";
const HashplusTile = (props) => {
  const navigate = useNavigate();
  const { tag } = props;
  const { text, amount, expiry, description, _id } = tag;

  const navigateTo = (id, name) => {
    navigate("/donationbox", { state: { name: name, id: id } });
    //render(<DonationBox id={props.id} name={props.name}></DonationBox>);
    //navigate("/donationbox", { state: { id: "the tile" } });
  };
  //const { name, ownername, date, balance, id } = hashplusInfo;
  //const date = "15/09/2022";
  //console.log("muzammil", moment(checkDate).format("DD/MM/YYYY"));
  return (
    <div id="trends-box">
      <div id="trends-left-box">
        <p id="tweet-number">{amount}</p>
        <p id="title-trends">{text}</p>
        <p>{description}</p>
        <p id="trending">polling on : {expiry}</p>
        <p id="trending">{props.ownername}</p>
        <button
          className="analytic"
          id="nav-icon-box"
          onClick={() => console.log("helllllo")}
          disabled={!(props.date == moment(Date.now()).format("DD/MM/YYYY"))}
        >
          <SiGoogleanalytics />
        </button>
      </div>
      <button onClick={() => navigateTo(_id, text)}>Donate</button>
    </div>
  );
};

export default HashplusTile;
