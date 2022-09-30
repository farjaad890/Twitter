import React, { useEffect, useState } from "react";
import Post from "../tweet/tweet";
import Tweet from "../ctweet/ctweet";
import Errormessage from "../Error/Error";
import "./homepage.scss";
import { fetchTweets } from "../../helpers";

const Homepage = () => {
  const [fetchedTweets, setTweets] = useState([]);
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const parsedResp = await fetchTweets();
      setresponse(parsedResp);
      setTweets(parsedResp.data);
      return true;
    };
    getTweets();
  }, []);
  if (response.status === 400) {
    return (
      <div className="Homepage">
        <div className="homepage-heading">Home</div>
        <Post></Post>
        <Errormessage></Errormessage>
      </div>
    );
  } else {
    return (
      <div className="Homepage">
        <div className="homepage-heading">Home</div>
        <Post></Post>
        {fetchedTweets.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div>
    );
  }
};

export default Homepage;
