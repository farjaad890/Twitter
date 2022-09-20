import React, { useState } from "react";

import { GoVerified } from "react-icons/go";

const AccountMight = (props) => {
  const [follow, setFollow] = useState(false);
  const [verified, setVerified] = useState(true);
  const { account } = props;
  const { name, email } = account;

  const followHandler = () => {
    if (follow === false) {
      setFollow(true);
    } else if (follow === true) {
      setFollow(false);
    }
  };

  return (
    <div id="box-account-might">
      <div id="container-might">
        <div id="row_">
          <img
            id="profile-might"
            src="https://avatars.githubusercontent.com/u/79017406?v=4"
            alt="profile"
          />
        </div>
        <div id="name-id-might">
          <div id="verified-box">
            <p id="name-might"> {name} </p>
            {verified === props.verified && <GoVerified id="verified" />}
          </div>
          <p id="id-might"> {email} </p>
        </div>
      </div>

      <button
        onClick={followHandler}
        id={follow === false ? "follow-might" : "following-might"}
      >
        {follow === true ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default AccountMight;
