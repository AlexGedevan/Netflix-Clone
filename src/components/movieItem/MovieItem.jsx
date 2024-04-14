import "./movieItem.css";

function MovieItem({ movie }) {
  return (
    <div className="movie-div">
      <img className="movie-image" src={movie.poster} alt="poster" />
      <span className="movie-name">{movie.name}</span>
    </div>
  );
}

export default MovieItem;
