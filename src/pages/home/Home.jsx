import { useEffect } from "react";
import { useMovies } from "../../context/moviesContext";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const { setError, currentUser } = useMovies();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!currentUser) {
        setError("Please sign in to access home page...");
        navigate("/error");
      }
    },
    [currentUser, navigate, setError]
  );
  return (
    <div className="home-page">
      <div className="home-introduction">
        <h2>Movies</h2>
        <p>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>
    </div>
  );
}

export default Home;
