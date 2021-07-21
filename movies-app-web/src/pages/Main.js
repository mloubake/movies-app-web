import { useState } from "react";

import api from "../services/api";

import MovieCard from "../component/MovieCard/index";

export default function Main() {
  // const [movies, setMovies] = useState([
  //   { title: "movie 1", genre: "genre a", releaseYear: "XXXX" },
  //   { title: "movie 2", genre: "genre b", releaseYear: "XXXX" },
  //   { title: "movie 3", genre: "genre c", releaseYear: "XXXX" },
  // ]);

  api
    .get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then((result) => {
      console.log(result.data.results);
    });

  return (
    <div>
      {/* {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          genre={movie.genre}
          releaseYear={movie.releaseYear}
        />
      ))} */}
    </div>
  );
}
