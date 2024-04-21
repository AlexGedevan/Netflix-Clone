import { Link } from "react-router-dom";
import "./movieItem.css";

function MovieItem({ movie, translate }) {
  return (
    <Link
      to={`/MoviePage/${movie.id}`}
      className="movie-div"
      style={{ transform: `translateX(${translate}%)` }}
    >
      <img className="movie-image" src={movie.poster} alt="poster" />
      <span className="movie-name">{movie.name}</span>
    </Link>
  );
}

export default MovieItem;
