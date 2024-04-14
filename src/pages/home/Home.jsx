import { useEffect, useState } from "react";
import { useMovies } from "../../context/moviesContext";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import MovieItem from "../../components/movieItem/MovieItem";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(function () {
    async function getMovies() {
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const newItem = {
          ...doc.data(),
          id: doc.id,
        };
        setMovies((state) => [...state, newItem]);
      });
    }
    getMovies();
  }, []);

  console.log(movies);
  const { setError, currentUser, query } = useMovies();
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
        <div className="released-last-year-movies">
          <h3>Released past year</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow-left"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow-right"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <div className="movies-list">
            {movies.map((movie) => (
              <MovieItem movie={movie} key={movie.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
