import "./styles.css";

export default function MovieCard({ title, genre, releaseYear }) {
  return (
    <>
      <div className="movie-item">
        <img
          src="https://images.unsplash.com/photo-1626454503701-3e9af8a46dc7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Movie Image"
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
