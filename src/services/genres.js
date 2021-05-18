import axios from "../utils/axios";

export const MovieGenres = async () => {
  let obj = await axios.get("/genre/movie/list");
  return obj.data.genres;
};
export const TvGenres = async () => {
  let obj = await axios.get("/genre/tv/list");
  return obj.data.genres;
};
