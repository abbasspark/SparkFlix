import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderItems } from "../../SiteData";
import { MovieGenres, TvGenres } from "../../services/genres";
export default function Header() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);
  useEffect(() => {
    async function getData() {
      const objMovies = await MovieGenres();
      const objtv = await TvGenres();

      setMovieGenres(objMovies);
      setTvGenres(objtv);
    }
    getData();
  }, []);
  function Genres({ data }) {
    if (data.isTvShow) {
      return tvGenres.map((item) => (
        <li key={item.id}>
          <Link title={item.name} to={`/genre/tv/${item.id}`}>
            {item.name}
          </Link>
        </li>
      ));
    } else {
      return movieGenres.map((item) => (
        <li key={item.id}>
          <Link title={item.name} to={`/genre/movie/${item.id}`}>
            {item.name}
          </Link>
        </li>
      ));
    }
  }
  return (
    <header className="home">
      <div className="container">
        <div id="menu-toggler">
          <i className="fa fa-list-ul"></i>
        </div>
        <Link to="/" id="logo">
          <h2>Watch Movies Online Free</h2>
        </Link>
        <ul id="menu">
          {HeaderItems.map((item) => {
            if (item.isMenu) {
              return (
                <li key={item.id}>
                  <Link to={item.link}>
                    {item.name} <i className="fa fa-plus"></i>
                  </Link>
                  <ul className="genre">
                    <Genres data={item} />
                  </ul>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <div id="user">
          <div className="guest" data-toggle="modal" data-target="#md-login">
            <i className="fa fa-user-circle"></i>
            <span>Login/ Register</span>
          </div>
        </div>
        <div id="search-toggler">
          <i className="fa fa-search"></i>
        </div>

        <form id="search" autoComplete="off" action="search">
          <input
            type="text"
            name="keyword"
            placeholder="Enter your keywords..."
            autoComplete="off"
          />
          <button></button> <div className="suggestions"></div>
        </form>
      </div>
    </header>
  );
}
