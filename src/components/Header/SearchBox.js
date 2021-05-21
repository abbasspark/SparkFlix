import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { SEARCH_API } from "../../services/api";
import { ImageBaseUrl } from "../../config";
import { Lables } from "../../SiteData";

export default function SearchBox({ keyword = "" }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      if (keyword !== "") {
        let obj = await axios.get(`${SEARCH_API}${keyword}`);
        setData(obj.data.results.slice(0, 5));
      } else {
        setData(null);
      }
    }
    getData();
  }, [keyword]);
  return (
    <div class="suggestions" style={{ display: "block" }}>
      {data && (
        <div>
          {data.map((item) => (
            <Link class="item" to={`/${item.media_type}/${item.id}`}>
              <div class="poster">
                <img src={`${ImageBaseUrl}${item.poster_path}`} alt={item.id} />
              </div>
              <div class="info">
                <div class="title">{item.name || item.title}</div>
                <div class="meta">
                  <span class="imdb">
                    <i class="fa fa-star"></i> {item.vote_average}
                  </span>
                  <i class="dot"></i>
                  {item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4) : ""}
                  <i class="dot"></i>
                  <i className="type">{item.media_type}</i>
                </div>
              </div>
            </Link>
          ))}
          <Link class="more" to={`/search?keyword=${keyword}`}>
            {Lables.viewallresults} <i class="fa fa-angle-right"></i>
          </Link>
        </div>
      )}
    </div>
  );
}
