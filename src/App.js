import React, { useState } from "react";
import Main from "./components/main/main";
import Login from "./components/login/login";
import "./App.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  // localStorage.getItem("isLoggedIn");
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
