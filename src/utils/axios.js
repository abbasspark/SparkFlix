import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "dd0bc8270fdfd825f807c81365746ecf",
    language: "en-US",
  },
});
