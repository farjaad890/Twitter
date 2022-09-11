const headerOptions = {
  "Content-Type": "application/json",
};
const options = {
  method: "POST",
  headers: headerOptions,
};

const url = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api`;

const api = async (subUrl, jsonData) => {
 
  try {
    const response = await fetch(`${url}/${subUrl}`, {
      data: JSON.stringify(jsonData),
      options,
      method: "POST",
    });
    const result = await response.text();
    console.table(result);

    return response;
  } catch (error) {
    console.error("error", error);
  }
};

export const register = async (jsonData) => {
  const uri = `user/signup`;
  const response = await api(uri, jsonData);

  //   localStorage.setItem("xauth", response.value);
  return response;
};

export const login = async (jsonData) => {
  const api = `user/login`;
  return await api(api, jsonData);
};
