import axios from "axios";

const headerOptionsLoginSignup = {
  "Content-Type": "application/json"
};

const headerOptions = {
  "Content-Type": "application/json",
  "X-Auth-Token": localStorage.getItem(123)
};

const options = (methodType, auth) => {
  return {
    method: methodType,
    headers: auth ? headerOptions : headerOptionsLoginSignup
  };
};

const url = `${process.env.REACT_APP_HOST}/api`;
// const url = "http://10.10.40.184:8080/api";

const apiPost = async (subUrl, jsonData, auth) => {
  try {
    const response = await axios.post(
      `${url}/${subUrl}`,
      jsonData,
      options("POST", auth)
    );
    const result = await response;
    return response;
  } catch (error) {
    console.error("error", error);
    return error.response;
  }
};
const apiGet = async (subUrl, auth) => {
  try {
    const response = await axios.get(`${url}/${subUrl}`, options("GET", auth));
    const result = await response;
    return response;
  } catch (error) {
    console.error("error", error);
    return error.response;
  }
};

export const register = async jsonData => {
  const uri = `user/signup`;
  const response = await apiPost(uri, jsonData);

  //   localStorage.setItem("xauth", response.value);
  return response;
};

export const login = async jsonData => {
  const api = `user/login`;
  return await apiPost(api, jsonData, false);
};
export const fetchTweets = async () => {
  const api = `tweet/`;
  return await apiGet(api, true);
};
export const fetchTrends = async () => {
  const api = `tweet/trends`;
  return await apiGet(api, true);
};
export const fetchAccounts = async () => {
  const api = `user/suggestions`;
  return await apiGet(api, true);
};

export const followUser = async _id => {
  const api = `user/follow/${_id}`;
  return await apiPost(api, {}, true);
};
export const unfollowUser = async _id => {
  const api = `user/follow/${_id}`;
  return await apiPost(api, {}, true);
};

export const createHashTagPlus = async jsonData => {
  const api = "api/hashtagplus/";
  return await apiPost(api, jsonData, true);
};
