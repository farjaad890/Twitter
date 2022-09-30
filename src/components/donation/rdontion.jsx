import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import "../login/login.scss";
import { useLocation } from "react-router-dom";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    const account = await window.ethereum.send("eth_requestAccounts");
    console.log("this is wallet");
    console.log(account);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

const RDonationBox = () => {
  const location = useLocation();
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const address = location.state.walletaddress;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const data = new FormData(e.target);
    const { username } = e.target;
    console.log("reached here");
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: username.value,
      //addr: data.get("addr"),
      addr: address,
    });
  };
  return (
    <div>
      <h1>Donation box</h1>
      <div className="login-box">
        <h2>Donation box</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input name="username" type="text" placeholder="Amount"></input>
          </div>
          <button className="btn__submit">Donate</button>
        </form>
        <div className="info">
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </div>
      </div>
    </div>
  );
};

export default RDonationBox;
