import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Lables } from "../../SiteData";
import { ImageBaseUrl } from "../../config";
import { StateContext } from "../../context/stateProvider";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

export default function Home() {
  const [swiper] = useContext(StateContext).movies_swiper[0];
  const [nowPlaying, setNowPlaying] = useState(swiper);
  useEffect(() => {
    setNowPlaying(swiper);
  }, [swiper]);
  return (
    <div>
      {nowPlaying && (
        <Swiper
          id="slider"
          className="swiper-container"
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
          grabCursor
          loop
          effect={"fade"}
        >
          {nowPlaying.map((item, i) => (
            <SwiperSlide
              key={item.id}
              className="item swiper-slide lazyloaded"
              style={{
                width: "599",
                backgroundImage: `url(${ImageBaseUrl}${item.backdrop_path})`,
              }}
            >
              <div className="container">
                <div className="info">
                  <h3 className="title">{item.title}</h3>
                  <div className="meta">
                    <span className="imdb">
                      <i className="fa fa-star"></i> {item.vote_average}
                    </span>
                    <span>{`${item.runtime} min`} </span>
                    <span>
                      {item.genres.map((genre) => (
                        <Link key={genre.id} to={`/genre/movie/${genre.id}`} title={genre.name}>
                          {genre.name}
                        </Link>
                      ))}
                    </span>
                    <span> {item.release_date} </span>
                  </div>
                  <div className="desc">{item.overview}</div>
                  <div className="actions">
                    <Link className="watchnow" to={`/movie/${item.id}`}>
                      <i className="fa fa-play"></i> {Lables.watchNow}
                    </Link>
                    <Link className="bookmark" to=".">
                      <i className="fa fa-heart" style={{ fontWeight: "400" }}></i> {Lables.addToList}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
