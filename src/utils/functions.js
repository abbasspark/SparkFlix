export function get_Genres(item = {}, tvgenres = [], movieGenres = []) {
  if (item.type === "TV") {
    return tvgenres.filter((el) => {
      return item.genre_ids.some((f) => {
        return f === el.id;
      });
    });
  }

  return movieGenres.filter((el) => {
    return item.genre_ids.some((f) => {
      return f === el.id;
    });
  });
}
