import "./movieItem.css";

function MovieItem({ movie, translate }) {
  return (
    <div
      className="movie-div"
      style={{ transform: `translateX(${translate}%)` }}
    >
      <img className="movie-image" src={movie.poster} alt="poster" />
      <span className="movie-name">{movie.name}</span>
    </div>
  );
}

export default MovieItem;
