import { useEffect } from "react";
import { useMovies } from "../../context/moviesContext";
import { useNavigate } from "react-router-dom";

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
  return <div>Home</div>;
}

export default Home;
