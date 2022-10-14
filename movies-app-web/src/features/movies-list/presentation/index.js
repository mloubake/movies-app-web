import { useState, useEffect } from "react";

import MovieCard from "../../../component/MovieCard/index";

import { getMovieGenres, getPopularMovies } from "../data/moviesRepository";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [allGenreIds, setAllGenreIds] = useState([]);

  useEffect(() => {
    getMovieGenres().then((res) => {
      setAllGenreIds(res);
    });

    getPopularMovies().then((res) => {
      setMovies(res);
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
          posterPath={movie.posterImageURL}
          title={movie.title}
          releaseYear={movie.releaseDate}
          genre={populateGenreIdsByName(movie.genreIds)}
        />
      ))}
    </div>
  );
}
