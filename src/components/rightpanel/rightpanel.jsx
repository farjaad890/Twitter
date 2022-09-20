import TrendsComponent from "./Trendscomponent/trendscomponent";
import AccountMight from "./Accountsmight/accountsmight";
import { RiSearchLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import "./rightpanel.scss";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchTrends } from "../../helpers";
import { fetchAccounts } from "../../helpers";

const Rightpanel = () => {
  const [fetchedTrends, setTrends] = useState([]);
  const [fetchedAccounts, setAccounts] = useState([]);

  useEffect(() => {
    const getAccounts = async () => {
      const response = await fetchAccounts();
      setAccounts(response.data);
      return true;
    };
    const getTrends = async () => {
      const parsedResp = await fetchTrends();
      setTrends(parsedResp.data);
      return true;
    };
    getAccounts();
    getTrends();
  }, []);
  return (
    <div id="container-right">
      <div id="fixed-search">
        <div id="search-box">
          <input placeholder=" Search Twitter" id="serch-input" type="text" />
          <RiSearchLine id="search-icon" />
        </div>
      </div>

      <div id="image-post-box">
        <div id="box-left-post"></div>
        <div id="box-right">
          <div id="box-up"></div>
          <div id="box-down">
            <img
              className="image-box"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            ></img>
          </div>
        </div>
      </div>

      <div id="might-like-box">
        <h2 id="title-might">You might like</h2>
        {fetchedAccounts.map((account) => (
          <AccountMight account={account} />
        ))}

        {/* <AccountMight
          verified={false}
          name="matin turkaman"
          id="@matinTurkaman"
          src="https://avatars.githubusercontent.com/u/79017406?v=4"
        />
        <AccountMight
          verified={true}
          name="JavaScript"
          id="@JavaScript"
          src="https://usefulangle.com/img/thumb/javascript.png"
        />
        <AccountMight
          verified={true}
          name="GitHub"
          id="@github"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <AccountMight
          verified={true}
          name="React"
          id="@reactjs"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4lrqANPnXmusNdulIrE2Vg1VPQHHpOmqo6lFMzRn0k7iH3JzFSIXaOG2h78uIUEB8uQ&usqp=CAU"
        /> */}

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <div id="trends-container">
        <div id="header-trends">
          <p id="trends-text">Trends</p>
          <span id="box-setting-icon">
            <IoSettingsOutline id="setting-icon" />
          </span>
        </div>
        {fetchedTrends.map((trends) => (
          <TrendsComponent trends={trends} />
        ))}

        {/* <TrendsComponent name="ReactJs" number="53.2K" />
        <TrendsComponent name="Javascript" number="28.5K" />
        <TrendsComponent name="GitHub" number="15.3K" />
        <TrendsComponent name="Google" number="20.8K" /> */}

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>
      <NavLink to="/hashplus">
        <div id="donating-container">
          <div id="header-trends">
            <p id="trends-text">Search for #+</p>
          </div>
        </div>
      </NavLink>
      <footer id="footer">
        <div id="footer-top">
          <a id="trems" href="#" onClick={(e) => e.preventDefault()}>
            Terms of Service
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            Cookie Policy
          </a>
        </div>

        <div id="footer-down">
          <a id="trems" href="#" onClick={(e) => e.preventDefault()}>
            Imprint
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Ads info
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            More...
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            © 2021 Twitter, Inc.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Rightpanel;
