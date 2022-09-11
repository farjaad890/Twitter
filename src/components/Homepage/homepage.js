import React, { useEffect, useState } from "react";
import Post from "../tweet/tweet";
import Ftweets from "../ftweets/ftweets";
import "./homepage.scss";

const Homepage = () => {
  const [fetchedTweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      // const resp = await fetch('apiurl');\
      const resp = {
        body: [
          {
            _id: "631d811c3c97bbeaf673c0fc",
            text: "my fifth tweet",
            privacy: "everyone",
            whoCanReply: "everyone",
            mentioned: [],
            hashTags: [],
            user: "631d80f43c97bbeaf673c0f2",
          },
        ],
      };
      setTweets(resp.body);
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
