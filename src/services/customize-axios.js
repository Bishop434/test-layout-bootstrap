import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in",
});

//Add a response intercreptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
