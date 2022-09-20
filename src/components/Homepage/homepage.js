import React, { useEffect, useState } from "react";
import Post from "../tweet/tweet";
import Tweet from "../ctweet/ctweet";
import Ftweets from "../ftweets/ftweets";
import "./homepage.scss";
import { fetchTweets } from "../../helpers";

const Homepage = () => {
  const [fetchedTweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const parsedResp = await fetchTweets();
      setTweets(parsedResp.data);
      return true;
    };
    getTweets();
  }, []);

  return (
    <div className="Homepage">
      <div className="homepage-heading">Home</div>
      <Post></Post>
      {/* <Tweet
        tweet="به نظر من chakra ui باحال تر از material ui ! "
        likeNumber="96"
        comment="5"
      />
      <Tweet
        tweet="نمیفهمم چرا ادم باید سی شارپ کار کنه؟ بعد اینجاش جالبه که بعضی اموزشگاه های برنامه نویسی اول باید سی شارپ کار کنی و گرنه برنامه نویسی یاد نمیگیری!"
        likeNumber="60"
      />
      <Tweet
        tweet="☃ چرا همه زمستونا سرما میخورن من تابستون عجییه برام"
        likeNumber="60"
      />
      <Tweet tweet="اگه وقت بزاری میشه ☄" likeNumber="60" />

      <Tweet
        tweet="فکر نمیکردم یه دوره رو بتونم تو دو روز تموم  کنم"
        likeNumber="60"
      /> */}
      {fetchedTweets.map((tweet) => (
        <Tweet tweet={tweet} />
      ))}
    </div>
  );
};

export default Homepage;
