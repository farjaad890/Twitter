import React from "react";
import "./ftweets.scss";
const ftweets = (props) => {
  const { tweet } = props;
  const { _id, text, privacy, user, whoCanReply, mentioned, hashTags } = tweet;
  // console.log(props);
  return (
    <div className="ftweets">
      <div className="ftweet__first">
        <div className="post__first__img">
          <img
            alt="Farjaad Waseem"
            draggable="true"
            src="https://pbs.twimg.com/profile_images/1514456437229068289/E8D0QNLL_normal.jpg"
          ></img>
        </div>
        <div className="post__first__name">
          <strong>Farjaad waseem</strong>
        </div>
        <div className="post__first__username">@farjaad890</div>
      </div>
      <div className="ftweet__details">
        <div className="post__detail__msg">
          {text || `HEllo from Farjaadakfma;kdfmkamf`}
        </div>
        <div className="post__details__img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt="Post image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ftweets;
