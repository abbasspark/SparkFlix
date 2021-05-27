import { get_Now_Playing, get_Popular } from "./services/movies";
export const HeaderItems = [
  { id: 1, name: "Home", link: "/home", isMenu: false },

  { id: 4, name: "Movies", link: ".", isMenu: true, isTvShow: false },
  {
    id: 5,
    name: "TV Shows",
    link: ".",
    isMenu: true,
    isTvShow: true,
  },
  { id: 6, name: "Top IMDb", link: "/topimdb", isMenu: false },
  { id: 7, name: "Up Coming", link: "/upcoming", isMenu: false },
];
export const Lables = {
  watchNow: "Watch now",
  addToList: "Add to list",
  removeFromList: "Remove from list",
  recommended: "Recommended",
  movies: "Movies",
  tvshows: "TV Shows",
  trending: "Trending",
  latestmovies: "Latest Movies",
  latesttvshows: "Latest TV Shows",
  viewallresults: "View all results",
  topimdbtvs: "Top Imdb TV Shows",
  topimdbmovies: "Top Imdb Movies",
  upcomingtvs: "Upcoming TV Shows",
  upcomingmovies: "Upcoming Movies",
};
export const FooterItems = {
  desc: `SparkFlix is top of <strong> free streaming website </strong> , where to watch movies online free without
  registration required. With a big database and great features, we're confident SparkFlix is the best free movies
  online website in the space that you can't simply miss!`,
  warning: ` This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.`,
  links: [
    { id: 1, name: "Movies", link: "/home" },
    { id: 2, name: "TV Shows", link: "/home" },
    { id: 3, name: "Up Coming", link: "/upcoming" },
    { id: 4, name: "Top IMDb", link: "/topimdb" },
  ],
  externalLinks: [
    { id: 1, name: " Watch Anime Online", link: "https://9anime.to" },
    { id: 2, name: " Watch TV Shows Online", link: "https://movies7.to" },
    { id: 3, name: "GogoAnime", link: "https://gogoanimetv.to" },
    { id: 4, name: "FlixTor", link: "https://flixtor.one" },
  ],
  contact: { name: "Contact", link: "/contact" },
  request: { name: "Request", link: "/request" },
};
export const HomePage = {
  now_playing: get_Now_Playing,
  popular: get_Popular,
};
