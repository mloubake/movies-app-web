import { useState, useEffect } from "react";

import api from "../services/api";

import MovieCard from "../component/MovieCard/index";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [allGenreIds, setAllGenreIds] = useState([]);

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then((result) => {
        setMovies(result.data.results);
      });

    api
      .get(`/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then((result) => {
        setAllGenreIds(result.data.genres);
      });
  }, []);

  function populateGenreIdsByName(genreIds) {
    let auxArr = [];

    genreIds.map((item) => {
      allGenreIds.map((value) => {
        return value.id === item ? auxArr.push(value.name) : "";
      });
    });

    return auxArr;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          posterPath={movie.poster_path}
          title={movie.title}
          releaseYear={movie.release_date}
          genre={populateGenreIdsByName(movie.genre_ids)}
        />
      ))}
    </div>
  );
}
