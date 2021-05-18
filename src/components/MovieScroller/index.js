import React from "react";
import { Link } from "react-router-dom";
import { ImageBaseUrl } from "../../config";
export default function MovieScroller({ data }) {
  return (
    <div className="content">
      <div className="filmlist ">
        {data.map((item) => (
          <div key={item.id} className="item tooltipstered">
            <div className="icons">
              <div className="quality">{item.quality}</div>
            </div>
            <Link
              to={`/movie/${item.id}`}
              title={item.title}
              className="poster"
            >
              <img src={`${ImageBaseUrl}${item.poster_path}`} alt={item.id} />
            </Link>

            <span className="imdb">
              <i className="fa fa-star"></i> {item.vote_average}
            </span>
            <h3>
              <Link
                to={`/movie/${item.id}`}
                title={item.title}
                className="title"
              >
                {item.title}
              </Link>
            </h3>
            <div className="meta">
              {item.release_date.slice(0, 4)} <i className="dot"></i>{" "}
              {item.runtime} min <i className="type">{item.type}</i>
            </div>
          </div>
        ))}
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
