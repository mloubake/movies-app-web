import "./styles.css";

export default function MovieCard({ posterPath, title, genre, releaseYear }) {
  function convertGenreListToText(genreList) {
    const bulletPoint = " \u2022 ";

    return genreList.join(bulletPoint);
  }

  function convertReleaseDateToReleaseYear(movieReleaseDate) {
    const releaseDate = new Date(movieReleaseDate);
    return releaseDate.getFullYear();
  }

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
          <span className="genre">{convertGenreListToText(genre)}</span>
          <span className="release-year">
            {convertReleaseDateToReleaseYear(releaseYear)}
          </span>
          <button>+ detalhes</button>
        </div>
      </div>
    </>
  );
}
