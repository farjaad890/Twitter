import React from "react";
import "../login/login.scss";
import { ethers } from "ethers";
import { Link, useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import Hashplus from "../hashplus/hashplus";
import Main from "../main/main";
import { useLocation } from "react-router-dom";
import contractabi from "../abi/tokken.json";
import Web3 from "web3";
import { addAmount } from "../../helpers";

const DonationBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contractAddress = "0x762b6A50eCABCEB33715E350dcc36e583C3911D8";
  const web3 = new Web3(Web3.givenProvider);
  const contractInstance = new web3.eth.Contract(
    contractabi.abi,
    contractAddress
  );
  const Donatemoney = async (name, ether) => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    const res = await contractInstance.methods.contributeToHashTag(name).send({
      from: accounts[0],
      value: ethers.utils.parseEther(ether),
    });
    var raw = {
      amount: ether,
      text: name,
    };
    const resamount = await addAmount(raw);
    console.log("the return value of res ");
    console.log(res);
    console.log(resamount);
    if (res) {
      navigate("/hashplus");
    }
    const res2 = await contractInstance.methods.getHashTagBalance(name).call();

    console.log(res2);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location.state.name);
    const { ether } = e.target;
    console.log(ether.value);
    Donatemoney(location.state.name, ether.value);
  };
  return (
    <div id="hashDonationBox">
      <h1>Donation box</h1>
      <div className="login-box">
        <h2>{location.state.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input name="ether" type="text" placeholder="Amount"></input>
          </div>
          <button className="btn__submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonationBox;
