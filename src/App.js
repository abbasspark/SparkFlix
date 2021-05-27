import React, { useContext, useEffect, useState } from "react";
import {
  GENRES_API_MOVIES,
  GENRES_API_TVSHOWS,
  NOW_PLAYING_API_MOVIES,
  POPULAR_API_MOVIES,
  TRENDING_API_MOVIES_TODAY,
  TRENDING_API_TVSHOWS_TODAY,
  POPULAR_API_TVSHOWS,
} from "./services/api";
import { StateContext, fetchGenresData, fetchMoviesData, fetchTvShowsData } from "./context/stateProvider";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  const setSwiper = useContext(StateContext).movies_swiper[1];
  const setMovies = useContext(StateContext).movies_recommended[1];
  const setNowPlaying = useContext(StateContext).movies_nowplaying[1];
  const setTrendingMovies = useContext(StateContext).movies_trending[1];
  const setMovieGenres = useContext(StateContext).movies_genres[1];
  const setPopularTvShows = useContext(StateContext).tvShows_popular[1];
  const setTvGenres = useContext(StateContext).tvShows_genres[1];
  const setTvShows = useContext(StateContext).tvShows_recommended[1];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchGenresData(GENRES_API_MOVIES, setMovieGenres);
    fetchMoviesData(POPULAR_API_MOVIES, setMovies);
    fetchMoviesData(NOW_PLAYING_API_MOVIES, setSwiper, 10);

    fetchMoviesData(NOW_PLAYING_API_MOVIES, setNowPlaying);
    fetchMoviesData(TRENDING_API_MOVIES_TODAY, setTrendingMovies);

    fetchTvShowsData(POPULAR_API_TVSHOWS, setPopularTvShows);
    fetchTvShowsData(TRENDING_API_TVSHOWS_TODAY, setTvShows);
    fetchGenresData(GENRES_API_TVSHOWS, setTvGenres);
    setLoading(false);
  }, [setMovies, setTvShows, setSwiper, setNowPlaying, setTrendingMovies, setMovieGenres, setTvGenres, setPopularTvShows]);

  return (
    <BrowserRouter>
      <div id="body">
        <Header />
        {!loading && <Routes />}
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
