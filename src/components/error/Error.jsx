import { Link, useNavigate } from "react-router-dom";
import { useMovies } from "../../context/moviesContext";
import "./error.css";
import LandingPage from "../../pages/LandingPage/LandingPage";

function Error() {
  const { error } = useMovies();

  return (
    <div className="error-page">
      <p className="error-message">{error}</p>
      {error === "Please sign in to access home page..." && (
        <Link className="sign-in-link" to="/">
          Sign In
        </Link>
      )}
    </div>
  );
}

export default Error;
