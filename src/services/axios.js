import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=3793f991",
});

export default axios;
