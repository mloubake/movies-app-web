import api from "../../../services/api";

export function getPopularMovies() {
  return api
    .get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then((result) => {
      return result.data.results;
    });
}

export function getMovieGenres() {
  return api
    .get(`/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then((result) => {
      return result.data.genres;
    });
}
