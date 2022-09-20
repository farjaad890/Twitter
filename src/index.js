import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/main/main";
import App from "./App";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/signup";
import Homepage from "./components/Homepage/homepage";
import Explorer from "./components/explorer/explorer";
import CreateHashplus from "./components/createhashplus/createhashplus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
