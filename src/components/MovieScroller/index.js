import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_API, DEFAULT_POSTER_Path } from "../../services/api";

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
              <img src={item.poster_path ? `${IMAGE_API}${item.poster_path}` : DEFAULT_POSTER_Path} alt={item.id} />
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
              {item.release_date ? item.release_date : ""} {/*<i className="dot"></i> {item.runtime} min{" "}*/}
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
