import { useEffect, useReducer, useState } from "react";
import { useMovies } from "../../context/moviesContext";
import { useNavigate } from "react-router-dom";
import "./home.css";
import MovieItem from "../../components/movieItem/MovieItem";
import { getDatabase, onValue, ref } from "firebase/database";

const initialState = {
  allMovies: [],
  moviesCategory: [],
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
    case "add/category":
      return {
        ...state,
        moviesCategory: [...state.moviesCategory, action.payload],
      };

    default:
      console.log("error");
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { translate, popularMovies, allMovies, moviesCategory } = state;
  const { setError, currentUser, query } = useMovies();

  const navigate = useNavigate();
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "/movies");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (!arr.includes(data[i].type)) {
          dispatch({ type: "add/category", payload: data[i].type });
          arr.push(data[i].type);
          console.log(arr);
        }
      }

      dispatch({ type: "get/all/movies", payload: data });
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

  return (
    <div className="home">
      <div className="home-page">
        <div className="home-introduction">
          <h2>Movies</h2>
          <p>
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </p>
        </div>
        <div className="all-movies-container">
          {moviesCategory.map((category) => {
            return (
              <div key={category}>
                <h2 className="movie-category">{category}</h2>
                <div className="all-movies-in-row">
                  {allMovies.map((movie) => {
                    return (
                      movie.type === category && (
                        <MovieItem movie={movie} key={movie.id} />
                      )
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
