import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SEARCH_API, DEFAULT_POSTER_Path } from "../../services/api";
import { ImageBaseUrl } from "../../config";
import { Lables } from "../../SiteData";
import { StateContext, fetchAllData } from "../../context/stateProvider";
export default function SearchBox({ keyword = "" }) {
  const [searching, setSearching] = useContext(StateContext).searching;

  useEffect(() => {
    if (keyword.trim() !== "") {
      fetchAllData(`${SEARCH_API}${keyword}`, setSearching, 5);
    } else {
      setSearching(null);
    }
  }, [keyword, setSearching, SEARCH_API]);
  return (
    <div className="suggestions" style={{ display: "block" }}>
      {searching && (
        <div>
          {searching.map((item) => (
            <Link key={item.id} className="item" to={`/${item.media_type}/${item.id}`}>
              <div className="poster">
                <img src={item.poster_path ? `${ImageBaseUrl}${item.poster_path}` : DEFAULT_POSTER_Path} alt={item.id} />
              </div>
              <div className="info">
                <div className="title">{item.name || item.title}</div>
                <div className="meta">
                  <span className="imdb">
                    <i className="fa fa-star"></i> {item.vote_average}
                  </span>
                  <i className="dot"></i>
                  {item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4) : ""}
                  <i className="dot"></i>
                  <i className="type">{item.media_type}</i>
                </div>
              </div>
            </Link>
          ))}
          <Link className="more" to={`/search?keyword=${keyword}`}>
            {Lables.viewallresults} <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      )}
    </div>
  );
}
