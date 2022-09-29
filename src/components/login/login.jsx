import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { isCompositeComponent } from "react-dom/test-utils";
import { Route } from "react-router-dom";
import Main from "../main/main";
import Signup from "../signup/signup";
import { login } from "../../helpers";

const Login = (props) => {
  const [address, setAddress] = useState(null);

  async function RequestAccounts() {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts);
      console.log(accounts);
    }
  }
  const { setIsLoggedIn } = props;

  const onSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = e.target;
    var raw = {
      username: username.value,
      password: password.value,
    };
    const parsedResp = await login(raw);
    if (parsedResp.status == 200) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem(123, parsedResp.headers["x-auth-token"]);
      setIsLoggedIn(true);
      RequestAccounts();
    } else {
      console.log("Error");
    }
  };
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="user-box">
          <input name="username" type="text" placeholder="UserName"></input>
        </div>
        <div className="user-box">
          <input name="password" type="password" placeholder="Password"></input>
        </div>
        <button className="btn__submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
