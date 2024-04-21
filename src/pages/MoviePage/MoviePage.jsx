import { useParams } from "react-router-dom";
import "./moviePage.css";
import { useMovies } from "../../context/moviesContext";

function MoviePage() {
  const { id } = useParams();
  const { allMovies } = useMovies();
  const movie = allMovies.find((movie) => (movie.id = id));
  console.log(movie);
  console.log(id);
  return <div>1</div>;
}

export default MoviePage;
