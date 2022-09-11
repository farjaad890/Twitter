import React from "react";
import './login.scss'
import { useState } from 'react';
import axios from 'axios';
import { isCompositeComponent } from "react-dom/test-utils";

const Login = (props) => {

    const { setIsLoggedIn } = props;
    const onSubmit = (e) => {
        e.preventDefault();
        
        const { username, password } = e.target;


        console.log(username.value);
        console.log(password.value);
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true)
                // axios.post('http://192.168.237.126:8080/api/user/login', {
        //     username: username.value,
        //     password: password.value
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     tokken = response.data;
        //   }, (error) => {
        //     console.log(error);
        //   });

          
        // let data = {
    
        //     headers: {
        //         "X-Auth-Token": tokken,
        //         "content-type": "application/json"
        //     }
        // };

        // axios.get('http://192.168.237.126:8080/api/user/123', data)
        //     .then((response) => {
        //         console.log(response);
        //     }, (error) => {
        //         console.log(error);
        //     })
        // const validUser = AuthJson.users.find(
        // (user) => user.email === email.value && user.password === password.value
        // );
        // if (!!validUser) {
        //   setIsUserValid(true);
        //   return;
        // }
        // console.log("not a valid user");
      };
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div  className="user-box">
                    <input name="username" type="text" placeholder="UserName"></input>
                </div>
                <div className="user-box">
                    <input name="password" type="password" placeholder="Password"></input>
                </div>
                <button className="btn__submit" >
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login;