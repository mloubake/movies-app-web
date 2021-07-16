import { useState } from "react";

import MovieCard from "../component/MovieCard/index";

export default function Main() {
  const [movies, setMovies] = useState([
    { title: "movie 1", genre: "genre a", releaseYear: "XXXX" },
    { title: "movie 2", genre: "genre b", releaseYear: "XXXX" },
    { title: "movie 3", genre: "genre c", releaseYear: "XXXX" },
  ]);

  return (
    <div style={{ border: "5px dotted black" }}>
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          genre={movie.genre}
          releaseYear={movie.releaseYear}
        />
      ))}
    </div>
  );
}
