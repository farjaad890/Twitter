import React from "react";
import { register } from "../../helpers";
import "./signup.scss";

const Signup = (props) => {
  const { setIsLoggedIn } = props;
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, username, password, email } = e.target;

    var raw = {
      username: username.value,
      name: name.value,
      email: email.value,
      password: password.value,
    };

    const parsedResp = await register(raw);
  };
  return (
    <div className="signup-box">
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <div className="user-box">
          <input name="username" type="text" placeholder="UserName"></input>
        </div>
        <div className="user-box">
          <input name="name" type="text" placeholder="Name"></input>
        </div>
        <div className="user-box">
          <input name="email" type="text" placeholder="Email"></input>
        </div>
        <div className="user-box">
          <input name="password" type="password" placeholder="Password"></input>
        </div>
        <button className="btn__submit">Signup</button>
      </form>
    </div>
  );
};
export default Signup;
