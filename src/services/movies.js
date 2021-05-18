import axios from "../utils/axios";
export const get_Now_Playing = async () => {
  let obj = await axios.get(`/movie/now_playing`);
  let result = [];
  for (let i = 0; i <= 10 - 1; i++) {
    let movie = await axios.get(`/movie/${obj.data.results[i].id}`);
    result.push(movie.data);
  }
  return result;
};

export const get_Popular = async () => {
  let obj = await axios.get(`/movie/popular`);
  let result = [];
  for (let i = 0; i <= obj.data.results.length - 5; i++) {
    let movie = await axios.get(`/movie/${obj.data.results[i].id}`);
    movie.data.type = "Movie";
    movie.data.quality = "HD";
    result.push(movie.data);
  }
  return result;
};
