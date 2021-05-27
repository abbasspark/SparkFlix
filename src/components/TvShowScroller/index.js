import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_API, DEFAULT_POSTER_Path } from "../../services/api";
import Tootipster from "../ToolTip";
export default function TvShowScroller({ data, category }) {
  return (
    <div className="content">
      <div className="filmlist ">
        {data.map((item) => (
          <div key={item.id} className="item tooltipstered" id={`tooltipster-${category}-${item.id}`}>
            <div className="icons">
              <div className="quality">{item.quality}</div>
            </div>
            <Link to={`/tv/${item.id}`} className="poster">
              <img src={item.poster_path ? `${IMAGE_API}${item.poster_path}` : DEFAULT_POSTER_Path} alt={item.id} />
            </Link>
            <span className="imdb">
              <i className="fa fa-star"></i> {item.vote_average}
            </span>
            <h3>
              <Link className="title" to={`/tv/${item.id}`}>
                {item.name}
              </Link>
            </h3>
            <div className="meta">
              {item.first_air_date}
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
