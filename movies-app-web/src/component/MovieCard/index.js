import "./styles.css";

export default function MovieCard({ posterPath, title, genre, releaseYear }) {
  return (
    <>
      <div className="movie-item">
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt={title}
            className="image"
          />
        </div>
        <div className="movie-info">
          <span className="title">{title}</span>
          <span className="genre">lorem ipsum dolor sit amet</span>
          <span className="release-year">{releaseYear}</span>
          <button>+ detalhes</button>
        </div>
      </div>
    </>
  );
}
