import React, { Component, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/homepage";
import LeftPlane from "./components/leftpanel/leftplane";
import Post from "./components/tweet/tweet";
import Main from "./components/main/main";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import "./App.scss";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  localStorage.getItem("isLoggedIn");
  // console.log(localStorage.getItem("isLoggedIn"));
  // console.log(localStorage.getItem(123));
  // console.log(localStorage.getItem("isLoggedIn"));
  return (
    <>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Main />}
    </>
  );
};

export default App;
