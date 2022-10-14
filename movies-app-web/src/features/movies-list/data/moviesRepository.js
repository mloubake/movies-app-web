import api from "../../../services/api";
import Movie from "../domain/movie";

export function getPopularMovies() {
  return api
    .get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then((result) => {
      return mapMovie(result.data.results);
    });
}

export function getMovieGenres() {
  return api
    .get(`/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then((result) => {
      return result.data.genres;
    });
}

function mapMovie(results) {
  return results.map((result) => {
    return new Movie(
      result.poster_path,
      result.title,
      result.release_date,
      result.genre_ids
    );
  });
}
