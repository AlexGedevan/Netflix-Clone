import { useEffect, useReducer, useState } from "react";
import { useMovies } from "../../context/moviesContext";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import MovieItem from "../../components/movieItem/MovieItem";
import { getDatabase, onValue, ref } from "firebase/database";

const initialState = {
  popularMovies: [],
  searchedMovies: [],
  translate: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "translate/forward":
      return { ...state, translate: state.translate - 400 };
    case "translate/back":
      return { ...state, translate: state.translate + 400 };
    case "get/popular/movies":
      return { ...state, popularMovies: action.payload };

    default:
      console.log("error");
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [popularMovies, setPopularMovies] = useState([]);
  // const [searchedMovies, setSearchedMovies] = useState([]);
  // const [translate, setTranslate] = useState(0);
  const { translate, popularMovies, searchedMovies } = state;
  const { setError, currentUser, query } = useMovies();
  const navigate = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "/movies");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data.Popular);
      dispatch({ type: "get/popular/movies", payload: data.Popular });
      // setPopularMovies((state) => data.Popular);
    });
  }, []);

  // console.log(popularMovies);

  useEffect(
    function () {
      if (!currentUser) {
        setError("Please sign in to access home page...");
        navigate("/error");
      }
    },
    [currentUser, navigate, setError]
  );

  function handleLeftArrow() {
    dispatch({ type: "translate/forward" });

    // setTranslate((state) => state + 400);
  }
  function handlerightArrow() {
    dispatch({ type: "translate/back" });
    // setTranslate((state) => state - 400);
  }

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
          <h3 style={{ marginBottom: "10px" }}>Released past year</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow-left"
            onClick={handleLeftArrow}
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
            onClick={handlerightArrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          {query && <div className="searched-movies"></div>}
          <div className="movies-list">
            {popularMovies.map((movie) => (
              <MovieItem movie={movie} key={movie.name} translate={translate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
