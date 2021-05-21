import { get_Now_Playing, get_Popular } from "./services/movies";
export const HeaderItems = [
  { id: 1, name: "Home", link: "/home", isMenu: false },
  { id: 3, name: "Country", link: "/country", isMenu: false },
  { id: 4, name: "Movies", link: ".", isMenu: true, isTvShow: false },
  {
    id: 5,
    name: "TV-Series",
    link: ".",
    isMenu: true,
    isTvShow: true,
  },
  { id: 6, name: "Top IMDb", link: "/top-imdb", isMenu: false },
  { id: 7, name: "Request", link: "/request", isMenu: false },
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
};
export const HomePage = {
  now_playing: get_Now_Playing,
  popular: get_Popular,
};
