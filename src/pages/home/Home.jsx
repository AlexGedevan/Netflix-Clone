import { useEffect, useReducer } from "react";
import { useMovies } from "../../context/moviesContext";
import { useNavigate } from "react-router-dom";
import "./home.css";
import MovieItem from "../../components/movieItem/MovieItem";
import { getDatabase, onValue, ref } from "firebase/database";

const initialState = {
  allMovies: [],
  popularMovies: [],
  adventureMovies: [],
  searchedMovies: [],
  translate: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "translate/forward":
      return { ...state, translate: state.translate - 400 };
    case "translate/back":
      return { ...state, translate: state.translate + 400 };
    case "get/all/movies":
      return { ...state, allMovies: action.payload };
    case "get/popular/movies":
      return {
        ...state,
        popularMovies: action.payload,
      };
    case "get/adventure/movies":
      return {
        ...state,
        adventureMovies: action.payload,
      };

    default:
      console.log("error");
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    translate,
    popularMovies,
    allMovies,
    adventureMovies,
    searchedMovies,
  } = state;
  const { setError, currentUser, query } = useMovies();
  console.log(allMovies);
  const navigate = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "/movies");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(Object.values(data));

      dispatch({ type: "get/all/movies", payload: data });
      dispatch({ type: "get/popular/movies", payload: data.Popular });
      dispatch({ type: "get/adventure/movies", payload: data.Adventure });
    });
  }, []);

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
    dispatch({ type: "translate/back" });

    // setTranslate((state) => state + 400);
  }
  function handlerightArrow() {
    dispatch({ type: "translate/forward" });
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
        {/* {allMovies.map((movie, index) => {
          return (
            <div className="released-last-year-movies" key={index}>
              <h3
                style={{
                  marginBottom: "20px",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                {movie}
              </h3>
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
                  <MovieItem
                    movie={movie}
                    key={movie.name}
                    translate={translate}
                  />
                ))}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Home;
