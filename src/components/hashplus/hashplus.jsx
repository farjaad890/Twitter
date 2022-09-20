import React from "react";
import HashplusTile from "./hashplustile";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Hashplus = () => {
  return (
    <div id="hashpage">
      <div id="fixed-search">
        <div id="search-box">
          <input placeholder=" Search Twitter" id="serch-input" type="text" />
          <RiSearchLine id="search-icon" />
        </div>
        <NavLink to="/createhashplus">
          <button>Create #+</button>
        </NavLink>
      </div>

      <br></br>
      <br></br>
      <div>
        <HashplusTile
          id="0"
          name="#+React"
          ownername="Farjaad"
          date="25/Sep/2022"
          balance="0.002"
        ></HashplusTile>
        <HashplusTile
          id="1"
          name="#+GlobalWarming"
          ownername="Sarmad"
          date="23/Sep/2022"
          balance="0.012"
        ></HashplusTile>
        <HashplusTile
          id="2"
          name="#+BlacklivesMater"
          ownername="Muzammil"
          date="20/Sep/2022"
          balance="0.032"
        ></HashplusTile>
      </div>
    </div>
  );
};

export default Hashplus;
