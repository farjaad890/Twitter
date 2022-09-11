import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/homepage";
import LeftPlane from "../leftpanel/leftplane";
import React, { Component } from "react";
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <LeftPlane></LeftPlane>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/explore">Explore</Route>
            <Route path="/notifications">Notifications</Route>
            <Route path="/messages">Messages</Route>
            <Route path="/profile">Profile</Route>
          </Routes>
          <div className="right-plane">Hello from the right plane</div>
        </div>
      </BrowserRouter>
    );
  }
}

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
