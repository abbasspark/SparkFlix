import { createContext, useState } from "react";
import axios from "../utils/axios";
export const StateContext = createContext();

// Function to fetch movies from an api
export const fetchMoviesData = async (api, setter, limit = 0) => {
  await axios
    .get(api)
    .then((res) => {
      if (res.status !== 200) {
        alert("Something Went Wrong in fetchMoviesData !");
      }
      return res;
    })
    .then(async (res) => {
      let result = [];
      let max = limit > 0 ? limit : res.data.results.length - 5;
      for (let i = 0; i <= max; i++) {
        let movie = await axios.get(`/movie/${res.data.results[i].id}`);
        movie.data.type = "Movie";
        movie.data.quality = "HD";
        result.push(movie.data);
      }
      setter([result]);
      // console.log(data.results);
    })
    .catch((err) => alert(err.message));
};
export const fetchTvShowsData = async (api, setter, limit = 0) => {
  await axios
    .get(api)
    .then((res) => {
      if (res.status !== 200) {
        alert("Something Went Wrong in fetchTvShowsData !");
      }
      return res;
    })
    .then(async (res) => {
      let result = [];
      let max = limit > 0 ? limit : res.data.results.length - 5;
      for (let i = 0; i <= max; i++) {
        let tvshow = await axios.get(`/tv/${res.data.results[i].id}`);
        tvshow.data.type = "TV";
        tvshow.data.quality = "HD";
        tvshow.data.episode_count = tvshow.data.seasons.filter(
          (x) => x.season_number === tvshow.data.number_of_seasons
        )[0].episode_count;
        result.push(tvshow.data);
      }
      setter([result]);
      // console.log(data.results);
    })
    .catch((err) => alert(err.message));
};
export const fetchAllData = async (api, setter, limit = 0) => {
  await axios
    .get(api)
    .then((res) => {
      if (res.status !== 200) {
        alert("Something Went Wrong !");
      }
      return res;
    })
    .then((res) => {
      let max = limit > 0 ? limit : res.data.results.length;
      setter(res.data.results.slice(0, max));
      // console.log(data.results);
    })
    .catch((err) => alert(err.message));
};
export const fetchGenresData = async (api, setter) => {
  await axios
    .get(api)
    .then((res) => {
      if (res.status !== 200) {
        alert("Something Went Wrong in fetchGenresData !");
      }
      return res;
    })
    .then((res) => {
      setter([res.data.genres]);
      // console.log(data.results);
    })
    .catch((err) => alert(err.message));
};
export const StateContextProvider = (props) => {
  // For Home Page Display
  //MOVIES
  const [swiper, setSwiper] = useState([]);
  const [moviegenres, setMovieGenres] = useState([]);
  const [recommendedmovies, setRecommendedMovies] = useState([]);
  const [trendingmovies, setTrendingMovies] = useState([]);
  const [nowplayingmovies, setNowPlayingMovies] = useState([]);
  //TV SHOWS
  const [recommendedtvShows, setRecommendedTvShows] = useState([]);
  const [populartvShows, setPopularTvShows] = useState([]);
  const [tvgenres, setTvGenres] = useState([]);

  // // For Searching purposes :
  // const [searching_tvShows, setSearchingTVShows] = useState(false);
  // const [searching_movies, setSearchingMovies] = useState(false);
  const [searching, setSearching] = useState(null);

  // // Search Result :
  //const [searching_result, setSearchingResult] = useState([]);
  // const [searching_tvShows_result, setSearchingTvShowsResult] = useState([]);

  return (
    // We can use the value of user, wherever we want in the components which are inside of the StateContext.Provider
    <StateContext.Provider
      value={{
        movies_genres: [moviegenres, setMovieGenres],
        movies_swiper: [swiper, setSwiper],
        movies_nowplaying: [nowplayingmovies, setNowPlayingMovies],
        movies_trending: [trendingmovies, setTrendingMovies],
        movies_recommended: [recommendedmovies, setRecommendedMovies],
        tvShows_recommended: [recommendedtvShows, setRecommendedTvShows],
        tvShows_popular: [populartvShows, setPopularTvShows],
        tvShows_genres: [tvgenres, setTvGenres],
        searching: [searching, setSearching],
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
