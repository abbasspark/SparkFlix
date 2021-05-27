import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/stateProvider";
import { HeaderItems } from "../../SiteData";
import SearchBox from "./SearchBox";

export default function Header() {
  const [params, setparams] = useState({});
  const [pathname, setPathname] = useState(window.location.pathname);
  const movieGenres = useContext(StateContext).movies_genres[0];
  const tvGenres = useContext(StateContext).tvShows_genres[0];
  useEffect(() => {
    if (movieGenres.length > 0 && tvGenres.length > 0) {
      let type = pathname.split("/")[2];
      let id = parseInt(pathname.split("/")[3]);
      let currentItem = type === "tv" ? tvGenres.find((x) => x.id === id) : movieGenres.find((x) => x.id === id);

      let name = currentItem.name;

      setparams({
        id,
        name,
        type,
      });
    }
  }, [movieGenres, tvGenres, pathname]);
  const [keyword, setKeyword] = useState("");

  function Genres({ data }) {
    if (data.isTvShow) {
      return tvGenres.map((item) => {
        return (
          <li key={item.id}>
            <a
              title={item.name}
              href={`/genre/tv/${item.id}`}
              className={item.id === params.id ? (params.type === "tv" ? "active" : "") : ""}
            >
              {item.name}
            </a>
          </li>
        );
      });
    } else {
      return movieGenres.map((item) => {
        return (
          <li key={item.id}>
            <a
              title={item.name}
              href={`/genre/movie/${item.id}`}
              className={item.id === params.id ? (params.type === "movie" ? "active" : "") : ""}
            >
              {item.name}
            </a>
          </li>
        );
      });
    }
  }
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <header className="home">
      <div className="container">
        <div id="menu-toggler">
          <i className="fa fa-list-ul"></i>
        </div>
        <a href="/" id="logo">
          <h2>Watch Movies Online Free</h2>
        </a>
        <ul id="menu">
          {HeaderItems.map((item) => {
            if (item.isMenu) {
              return (
                <li key={item.id}>
                  <a href={item.link}>
                    {item.name} <i className="fa fa-plus"></i>
                  </a>
                  <ul className="genre">
                    <Genres data={item} />
                  </ul>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
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
          <input type="text" name="keyword" placeholder="Enter your keywords..." autoComplete="off" onChange={handleChange} />
          <button></button> <div className="suggestions"></div>
          <SearchBox keyword={keyword} />
        </form>
      </div>
    </header>
  );
}
