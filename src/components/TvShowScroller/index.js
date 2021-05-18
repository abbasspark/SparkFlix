import React from "react";
import { Link } from "react-router-dom";
import { ImageBaseUrl } from "../../config";
export default function TvShowScroller({ data }) {
  return (
    <div className="content">
      <div className="filmlist ">
        {data.map((item) => (
          <div key={item.id} className="item tooltipstered">
            <div className="icons">
              <div className="quality">{item.quality}</div>
            </div>
            <Link to={`/tv/${item.id}`} title={item.name} className="poster">
              <img src={`${ImageBaseUrl}${item.poster_path}`} alt={item.id} />
            </Link>
            <span className="imdb">
              <i className="fa fa-star"></i> {item.vote_average}
            </span>
            <h3>
              <Link className="title" title={item.name} to={`/tv/${item.id}`}>
                {item.name}
              </Link>
            </h3>
            <div className="meta">
              {`SS ${item.number_of_seasons}`} <i className="dot"></i>{" "}
              {`EP ${item.episode_count}`} <i className="type">{item.type}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
