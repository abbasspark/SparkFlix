import React, { useState, useEffect, useContext } from "react";
import { Lables } from "../../SiteData";

import { StateContext } from "../../context/stateProvider";

import MovieScroller from "../MovieScroller";
import TvShowScroller from "../TvShowScroller";
export default function Home() {
  const [dataType, setDataType] = useState("movies");

  //Recommended Section
  const [recommendedmovies] = useContext(StateContext).movies_recommended[0];
  const [recommendedtvshows] = useContext(StateContext).tvShows_recommended[0];
  const [trendingmovies] = useContext(StateContext).movies_trending[0];
  const [dataSource, setDataSource] = useState(recommendedmovies);

  //Now Playing Movies Section
  const [nowplaying] = useContext(StateContext).movies_nowplaying[0];
  const [nowPlayingMovies, setNowPlayingMovies] = useState(nowplaying);

  //Popular TV SHOWS Section
  const [populartvShows] = useContext(StateContext).tvShows_popular[0];
  const [populartv, setPopularTv] = useState(populartvShows);
  useEffect(() => {
    async function getData() {
      switch (dataType) {
        case "movies":
          setDataSource(recommendedmovies);
          break;
        case "shows":
          setDataSource(recommendedtvshows);
          break;
        case "trending":
          setDataSource(trendingmovies);
          break;
        default:
          break;
      }
    }
    getData();
  }, [dataType, recommendedmovies, recommendedtvshows, trendingmovies]);
  useEffect(() => {
    setNowPlayingMovies(nowplaying);
    setPopularTv(populartvShows);
  }, [nowplaying, populartvShows]);
  const handleClick = (e) => {
    setDataType(e.target.dataset.name);
  };
  return (
    <div>
      <div className="container">
        <section className="bl">
          <div className="heading">
            <h2>{Lables.recommended}</h2>
            <div className="tabs">
              <span className={dataType === "movies" ? "active" : ""} data-name="movies" onClick={handleClick}>
                <i className="fa fa-play-circle"></i> {Lables.movies}
              </span>
              <span className={dataType === "shows" ? "active" : ""} data-name="shows" onClick={handleClick}>
                <i className="fa fa-list"></i> {Lables.tvshows}
              </span>
              <span className={dataType === "trending" ? "active" : ""} data-name="trending" onClick={handleClick}>
                <i className="fa fa-chart-line"></i> {Lables.trending}
              </span>
            </div>
            <div className="clearfix"></div>
          </div>
          {dataType === "shows"
            ? dataSource && <TvShowScroller data={dataSource} category={dataType} />
            : dataSource && <MovieScroller data={dataSource} category={dataType} />}
          <div className="clearfix"></div>
        </section>
        <section className="bl">
          <div className="heading">
            <h2>{Lables.latestmovies}</h2>
            <div className="clearfix"></div>
          </div>
          {nowPlayingMovies && <MovieScroller data={nowPlayingMovies} category="latest" />}
          <div className="clearfix"></div>
        </section>
        <section className="bl">
          <div className="heading">
            <h2>{Lables.latesttvshows}</h2>
            <div className="clearfix"></div>
          </div>
          {populartv && <TvShowScroller data={populartv} category="latesttvshows" />}
        </section>
      </div>
    </div>
  );
}
