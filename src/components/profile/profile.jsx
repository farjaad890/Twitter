import React, { useState, useEffect } from "react";
import "./profile.scss";
import Tweet from "../ctweet/ctweet";
import { BiArrowBack } from "react-icons/bi";
import { CgMoreAlt, CgCalendarDates } from "react-icons/cg";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { fetchTweets, getMyTweets } from "../../helpers";
import Errormessage from "../Error/Error";

//import Tweet from "../tweet/tweet";

const Profile = () => {
  const [follow, setFollow] = useState(true);
  const [fetchedTweets, setTweets] = useState([]);
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const parsedResp = await getMyTweets();
      setresponse(parsedResp);
      setTweets(parsedResp.data);
      return true;
    };
    getTweets();
  }, []);
  const followHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };
  if (response.status === 200) {
    return (
      <div id="container-main">
        <div id="box-top">
          <span id="back-icon-box">
            <BiArrowBack id="back-icon" />
          </span>

          <div id="box-top-right">
            <p id="name-header">Farjaad waseem</p>
            <span id="tweets-number">22 Tweets</span>
          </div>
        </div>

        <div id="header-box">
          <div id="profile-image"></div>
        </div>

        <div id="edit-box">
          <span id="more-box">
            <CgMoreAlt id="more-header" />
          </span>
          <button
            className={follow === false ? "following" : "Follow"}
            onClick={followHandler}
          >
            {follow ? "Follow" : "Following"}
          </button>
        </div>

        <div id="name-id-box">
          <p id="name-user">Farjaad waseem</p>
          <p id="id-user">@farjaad890</p>
        </div>
        <div id="job-box">
          <p id="job">Frontend Developer</p>
        </div>

        <div id="date-box">
          <CgCalendarDates id="date-icon" />
          <p id="date">Joined January 2021</p>
        </div>

        <div id="following-follow-box">
          <span id="number-follow">35</span>
          <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
            Following
          </a>

          <span id="number-follow" className="margin-left">
            {follow === false ? 6 : 5}
          </span>
          <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
            Followers
          </a>
        </div>
        <div id="nav-header">
          <div id="box-nav" className="box-Tweets">
            <p id="nav">Tweets</p>
          </div>

          <div id="box-nav" className="box-replies">
            <p id="nav">Tweets & replies</p>
          </div>

          <div id="box-nav" className="box-Media">
            <p id="nav">Media</p>
          </div>

          <div id="box-nav" className="box-Likes">
            <p id="nav">Likes</p>
          </div>
        </div>

        <div id="line"></div>
        {fetchedTweets.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div>
    );
  } else {
    return (
      <div id="container-main">
        <div id="box-top">
          <span id="back-icon-box">
            <BiArrowBack id="back-icon" />
          </span>

          <div id="box-top-right">
            <p id="name-header">Farjaad waseem</p>
            <span id="tweets-number">22 Tweets</span>
          </div>
        </div>

        <div id="header-box">
          <div id="profile-image"></div>
        </div>

        <div id="edit-box">
          <span id="more-box">
            <CgMoreAlt id="more-header" />
          </span>
          <button
            className={follow === false ? "following" : "Follow"}
            onClick={followHandler}
          >
            {follow ? "Follow" : "Following"}
          </button>
        </div>

        <div id="name-id-box">
          <p id="name-user">ali turkaman</p>
          <p id="id-user">@ATurkaman</p>
        </div>

        <div id="job-box">
          <p id="job">Frontend Developer</p>
        </div>

        <div id="date-box">
          <CgCalendarDates id="date-icon" />
          <p id="date">Joined January 2021</p>
        </div>

        <div id="following-follow-box">
          <span id="number-follow">35</span>
          <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
            Following
          </a>

          <span id="number-follow" className="margin-left">
            {follow === false ? 6 : 5}
          </span>
          <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
            Followers
          </a>
        </div>
        <div id="nav-header">
          <div id="box-nav" className="box-Tweets">
            <p id="nav">Tweets</p>
          </div>

          <div id="box-nav" className="box-replies">
            <p id="nav">Tweets & replies</p>
          </div>

          <div id="box-nav" className="box-Media">
            <p id="nav">Media</p>
          </div>

          <div id="box-nav" className="box-Likes">
            <p id="nav">Likes</p>
          </div>
        </div>
        <div id="line"></div>
        <Errormessage></Errormessage>
      </div>
    );
  }
};
export default Profile;
