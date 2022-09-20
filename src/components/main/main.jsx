import Homepage from "../Homepage/homepage";
import LeftPlane from "../leftpanel/leftplane";
import React, { Component } from "react";
import Explorer from "../explorer/explorer";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom";
import Rightpanel from "../rightpanel/rightpanel";
import Profile from "../profile/profile";
import Hashplus from "../hashplus/hashplus";
import DonationBox from "../donation/donation";
import RDonationBox from "../donation/rdontion";
import CreateHashplus from "../createhashplus/createhashplus";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPlane></LeftPlane>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/explorer" element={<Explorer></Explorer>}></Route>
          <Route path="/notifications">Notifications</Route>
          <Route path="/messages">Messages</Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/hashplus" element={<Hashplus></Hashplus>}></Route>
          <Route
            path="/donationbox"
            element={<DonationBox></DonationBox>}
          ></Route>
          <Route
            path="/retweetDonation"
            element={<RDonationBox></RDonationBox>}
          ></Route>
          <Route
            path="/createhashplus"
            element={<CreateHashplus></CreateHashplus>}
          ></Route>
        </Routes>
        <Rightpanel></Rightpanel>
      </div>
    </BrowserRouter>
  );
};

export default Main;

// const  Main = () =>  {
//     return (
//        <div className="Main">
//          <LeftPlane></LeftPlane>
//         <Routes>
//         <Route  exact path="/" element={<Homepage/>}/>
//          <Route path='/explore'>Explore</Route>
//          <Route path='/notifications'>Notifications</Route>
//            <Route path='/messages'>Messages</Route>
//            <Route path='/profile'>Profile</Route>
//          </Routes>
//        </div>

//     );
//   }

//   export default Main;
