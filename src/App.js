import React, { useContext, useEffect } from "react";
import {
  GENRES_API_MOVIES,
  GENRES_API_TVSHOWS,
  NOW_PLAYING_API_MOVIES,
  POPULAR_API_MOVIES,
  TRENDING_API_MOVIES_TODAY,
  TRENDING_API_TVSHOWS_TODAY,
  POPULAR_API_TVSHOWS,
} from "./services/api";
import {
  StateContext,
  fetchGenresData,
  fetchMoviesData,
  fetchTvShowsData,
} from "./context/stateProvider";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Routes from "./Routes";

function App() {
  const [swiper, setSwiper] = useContext(StateContext).movies_swiper;
  const [movies, setMovies] = useContext(StateContext).movies_recommended;
  const [nowplaying, setNowPlaying] =
    useContext(StateContext).movies_nowplaying;
  const [trendingmovies, setTrendingMovies] =
    useContext(StateContext).movies_trending;
  const [moviegenres, setMovieGenres] = useContext(StateContext).movies_genres;
  const [populartvShows, setPopularTvShows] =
    useContext(StateContext).tvShows_popular;
  const [tvgenres, setTvGenres] = useContext(StateContext).tvShows_genres;
  const [tvShows, setTvShows] = useContext(StateContext).tvShows_recommended;
  useEffect(() => {
    fetchGenresData(GENRES_API_MOVIES, setMovieGenres);
    fetchMoviesData(POPULAR_API_MOVIES, setMovies);
    fetchMoviesData(NOW_PLAYING_API_MOVIES, setSwiper, 10);

    fetchMoviesData(NOW_PLAYING_API_MOVIES, setNowPlaying);
    fetchMoviesData(TRENDING_API_MOVIES_TODAY, setTrendingMovies);

    fetchTvShowsData(POPULAR_API_TVSHOWS, setPopularTvShows);
    fetchTvShowsData(TRENDING_API_TVSHOWS_TODAY, setTvShows);
    fetchGenresData(GENRES_API_TVSHOWS, setTvGenres);
  }, [
    setMovies,
    setTvShows,
    setSwiper,
    setNowPlaying,
    setTrendingMovies,
    setMovieGenres,
    setTvGenres,
    setPopularTvShows,
  ]);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
