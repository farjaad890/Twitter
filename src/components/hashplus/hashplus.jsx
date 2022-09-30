import React, { useEffect, useState } from "react";
import HashplusTile from "./hashplustile";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { getHashtags } from "../../helpers";
import Errormessage from "../Error/Error";

const Hashplus = () => {
  const [fetchedHashTags, sethashtags] = useState([]);
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const gethashplus = async () => {
      const parsedResp = await getHashtags();
      setresponse(parsedResp);
      sethashtags(parsedResp.data);
      return true;
    };
    gethashplus();
  }, []);
  if (response.status === 400) {
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
          <Errormessage></Errormessage>
          {/* <HashplusTile
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
        ></HashplusTile> */}
        </div>
      </div>
    );
  } else {
    console.log(fetchedHashTags);
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
          {fetchedHashTags.map((tag) => (
            <HashplusTile tag={tag}></HashplusTile>
          ))}
          {/* <HashplusTile
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
        ></HashplusTile> */}
        </div>
      </div>
    );
  }
};

export default Hashplus;
