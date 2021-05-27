import React, { useState, useContext } from "react";
import { StateContext } from "../../context/stateProvider";
import { Tooltip } from "reactstrap";
import { Link } from "react-router-dom";
import { Lables } from "../../SiteData";
import { get_Genres } from "../../utils/functions";
const Tooltipster = ({ item, category }) => {
  const movieGenres = useContext(StateContext).movies_genres[0];
  const tvgenres = useContext(StateContext).tvShows_genres[0];
  const genres = get_Genres(item, tvgenres, movieGenres);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const getLink = (id) => (item.type === "TV" ? `/genre/tv/${id}` : `/genre/movie/${id}`);
  return (
    <Tooltip
      placement="auto"
      isOpen={tooltipOpen}
      autohide={false}
      target={`tooltipster-${category}-${item.id}`}
      toggle={toggle}
      title={item.title}
      style={{
        minWidth: 250,
        zIndex: 9999999,
        height: "auto",
        width: "auto",
        opacity: 2,
        textAlign: "left",
        backgroundColor: "#212529 ",
      }}
    >
      <div className={`tooltipster-sidetip tooltipster-left tooltipster-fade tooltipster-show `}>
        <div className="tooltipster-box" style={{ margin: 0, opacity: 1 }}>
          <div className="tooltipster-content">
            <div className="title">{item.title || item.name}</div>
            <div className="meta">
              <span className="imdb">
                <i className="fa fa-star"></i> {item.vote_average}
              </span>
              {item.type === "Movie" && <span>{item.release_date ? item.release_date.slice(0, 4) : ""}</span>}
              {/* {item.type === "Movie" && <span>{item.runtime} min</span>} */}
              <span className="text-right">
                <span className="quality">{item.quality}</span>
              </span>
            </div>
            <div className="desc">{item.overview ? item.overview.slice(0, 200) : item.overview}...</div>
            <div className="meta">
              <div>
                <span>Genre: </span>
                <span>
                  {genres.map((item) => (
                    <Link to={getLink(item.id)} title={item.name} key={item.id}>
                      <i className="genre">{item.name} </i>
                    </Link>
                  ))}
                </span>
              </div>
            </div>

            <div className="actions">
              <a
                className="bookmark"
                data-id="qno65"
                data-action="add"
                data-add="<i className='fa fa-heart' style='font-weight: 400'></i>"
                data-remove="<i className='fa fa-minus'></i>"
              >
                <i className="fa fa-heart" style={{ fontWeight: 400 }}></i>
              </a>

              <Link className="watchnow" to={`/movie/${item.id}`}>
                <i className="fa fa-play"></i> {Lables.watchNow}
              </Link>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="tooltipster-arrow" style={{ display: "none", top: 88.1625 }}>
          <div className="tooltipster-arrow-uncropped">
            <div className="tooltipster-arrow-border"></div>
            <div className="tooltipster-arrow-background"></div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default Tooltipster;
