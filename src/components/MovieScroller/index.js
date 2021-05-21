import React from "react";
import { Link } from "react-router-dom";
import { ImageBaseUrl } from "../../config";

import Tootipster from "../ToolTip";
export default function MovieScroller({ data, category }) {
  return (
    <div className="content">
      <div className="filmlist ">
        {data.map((item) => (
          <div key={item.id} id={`tooltipster-${category}-${item.id}`} className={`item tooltipster-${item.id}`}>
            <div className="icons">
              <div className="quality">{item.quality}</div>
            </div>
            <Link to={`/movie/${item.id}`} className="poster">
              <img src={`${ImageBaseUrl}${item.poster_path}`} alt={item.id} />
            </Link>

            <span className="imdb">
              <i className="fa fa-star"></i> {item.vote_average}
            </span>
            <h3>
              <Link to={`/movie/${item.id}`} className="title">
                {item.title}
              </Link>
            </h3>
            <div className="meta">
              {item.release_date ? item.release_date.slice(0, 4) : ""} <i className="dot"></i> {item.runtime} min{" "}
              <i className="type">{item.type}</i>
            </div>
            {item && <Tootipster item={item} category={category} />}
          </div>
        ))}

        <div className="clearfix"></div>
      </div>
    </div>
  );
}
