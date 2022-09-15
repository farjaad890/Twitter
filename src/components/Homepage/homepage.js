import React, { useEffect, useState } from "react";
import Post from "../tweet/tweet";
import Ftweets from "../ftweets/ftweets";
import "./homepage.scss";
import { fetchTweets } from "../../helpers";

const Homepage = () => {
  const [fetchedTweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const parsedResp = await fetchTweets();
      // console.log("Hello from get tweets");
      // console.log(parsedResp);
      setTweets(parsedResp.data);
      return true;
    };
    getTweets();
  }, []);

  return (
    <div className="Homepage">
      <div className="homepage-heading">Home</div>
      <Post></Post>
      {fetchedTweets.map((tweet) => (
        <Ftweets tweet={tweet} />
      ))}
      <Ftweets tweet={{}}></Ftweets>
      <Ftweets tweet={{}}></Ftweets>
      <Ftweets tweet={{}}></Ftweets>
    </div>
  );
};

export default Homepage;
