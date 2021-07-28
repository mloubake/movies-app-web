import "./styles.css";

export default function MovieCard({ posterPath, title, genre, releaseYear }) {
  return (
    <>
      <div className="movie-item">
        <img
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={title}
          className="movie-image"
        />
        <div className="movie-info">
          <span className="title">{title}</span>
          <span className="genre">{genre}</span>
          <span className="release-year">{releaseYear}</span>
        </div>
      </div>
    </>
  );
}
