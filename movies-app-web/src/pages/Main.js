import { useState, useEffect } from "react";

import api from "../services/api";

import MovieCard from "../component/MovieCard/index";

export default function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then((result) => {
        setMovies(result.data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          posterPath={movie.poster_path}
          title={movie.title}
          releaseYear={movie.release_date}
          // genre={movie.genre}
        />
      ))}
    </div>
  );
}
