import React, { useState } from "react";
import { Emoji, GIF, media, polls } from "./icons";
import "./tweet.scss";
const Post = () => {
  const [tweetText, setTweetText] = useState("sample text");

  const postTweet = (e) => {
    e.preventDefault();
    console.log(tweetText);

    //const { username, password } = e.target;

    //console.log(username.value);
    //console.log(password.value);
  };
  const handlepoole = () => {
    console.log("Hello from the polls");
  };
  return (
    <div className="tweet">
      <div className="component">
        <div className="profile-pic">
          <img
            alt="Farjaad Waseem"
            draggable="true"
            src="https://pbs.twimg.com/profile_images/1514456437229068289/E8D0QNLL_normal.jpg"
          ></img>
        </div>
        <div className="input">
          <textarea
            type="text"
            value={tweetText}
            onChange={(e) => {
              setTweetText(e.target.value);
            }}
            className="input-field"
            placeholder="What's Happening?"
            name="tweet"
          ></textarea>
        </div>
      </div>
      <div className="icons-holder">
        <div className="icons">
          <span>{Emoji}</span>
          <span>{GIF}</span>
          <span>{media}</span>
          <span onClick={handlepoole}>{polls}</span>
        </div>
        <button onClick={postTweet} className="Tweet-button">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Post;
