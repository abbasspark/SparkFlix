import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchGenres } from "../../context/stateProvider";
import MovieScroller from "../MovieScroller";
import TvShowScroller from "../TvShowScroller";
import Pagination from "../Pagination/Pagination";
import { StateContext } from "../../context/stateProvider";
import Slider from "../Slider";
export default function Genre() {
  const params = useParams();
  const movieGenres = useContext(StateContext).movies_genres[0];
  const tvGenres = useContext(StateContext).tvShows_genres[0];
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [genreName, setGenreName] = useState("");
  useEffect(() => {
    function getGenre() {
      if (params.type === "tv") {
        if (tvGenres.length > 0) {
          let obj = tvGenres.find((x) => x.id.toString() === params.id);
          setGenreName(obj.name);
        }
      } else {
        if (movieGenres.length > 0) {
          let obj = movieGenres.find((x) => x.id.toString() === params.id);
          setGenreName(obj.name);
        }
      }
      setPage(1);
    }
    getGenre();
  }, [params, tvGenres, movieGenres]);
  useEffect(() => {
    async function getData() {
      setTotalPages(null);
      let { result, totalPages } = await fetchGenres(params, 1);
      setData(result);
      setTotalPages(totalPages);
    }
    getData();
  }, [params]);
  useEffect(() => {
    async function getData() {
      let { result } = await fetchGenres(params, page);
      setData(result);
    }
    getData();
  }, [page]);
  const onPageChanged = (pageOfItems) => {
    setPage(pageOfItems.currentPage === 0 ? 1 : pageOfItems.currentPage);
  };

  return (
    <div>
      <Slider />
      <div className="container ">
        <section className="bl">
          <div className="heading">
            <h2>{`${genreName}${params.type === "tv" ? " -TV SHOWS" : " -MOVIES"}`}</h2>
            <div className="clearfix"></div>
          </div>
          {params.type === "tv" ? (
            <TvShowScroller data={data} category={`genre_${params.id}`} />
          ) : (
            <MovieScroller data={data} category={`genre_${params.id}`} />
          )}

          {totalPages && (
            <Pagination
              totalPages={totalPages}
              totalRecords={totalPages * 20}
              pageLimit={20}
              pageNeighbours={1}
              onPageChanged={onPageChanged}
            />
          )}
        </section>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
