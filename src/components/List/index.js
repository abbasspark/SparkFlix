import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import { fetchList } from "../../context/stateProvider";
import Pagination from "../Pagination/Pagination";
import MovieScroller from "../MovieScroller";
import TvShowScroller from "../TvShowScroller";
import { Lables } from "../../SiteData";
export default function List() {
  const [page, setPage] = useState(1);
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [title, setTitle] = useState({ moviesTitle: "", tvShowsTitle: "" });
  useEffect(() => {
    switch (window.location.pathname) {
      case "/upcoming":
        setTitle({ moviesTitle: Lables.upcomingmovies, tvShowsTitle: Lables.upcomingtvs });
        break;
      case "/topimdb":
        setTitle({ moviesTitle: Lables.topimdbmovies, tvShowsTitle: Lables.topimdbtvs });
        break;
      default:
        setTitle({ moviesTitle: Lables.upcomingmovies, tvShowsTitle: Lables.upcomingtvs });
        break;
    }
  }, []);
  useEffect(() => {
    async function getData() {
      let { movie_data, tv_data } = await fetchList(page, window.location.pathname);
      setMovieData(movie_data.result);
      setTvData(tv_data.result);
      if (movie_data.totalPages > tv_data.totalPages) {
        setTotalPages(tv_data.totalPages);
      } else {
        setTotalPages(movie_data.totalPages);
      }
    }
    getData();
  }, [page]);
  const onPageChanged = (pageOfItems) => {
    setPage(pageOfItems.currentPage === 0 ? 1 : pageOfItems.currentPage);
  };
  return (
    <div>
      <Slider />
      <div className="container">
        <section className="bl">
          <div className="heading">
            <h2>{title.moviesTitle}</h2>
            <div className="clearfix"></div>
          </div>
          {movieData && <MovieScroller data={movieData} category="topimdbmovie" />}
          <div className="clearfix"></div>
        </section>
        <section className="bl">
          <div className="heading">
            <h2>{title.tvShowsTitle}</h2>
            <div className="clearfix"></div>
          </div>
          {tvData && <TvShowScroller data={tvData} category="topimdbtv" />}
          <div className="clearfix"></div>
        </section>

        {totalPages && (
          <Pagination
            totalPages={totalPages}
            totalRecords={totalPages * 20}
            pageLimit={20}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          />
        )}
      </div>
    </div>
  );
}
