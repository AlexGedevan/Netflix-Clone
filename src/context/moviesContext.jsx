import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

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

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { translate, popularMovies, allMovies, moviesCategory } = state;
  const storedItems = JSON.parse(localStorage.getItem("user"));

  const [currentUser, setCurrentUser] = useState(storedItems);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <MoviesContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        error,
        setError,
        query,
        setQuery,
        dispatch,
        translate,
        popularMovies,
        allMovies,
        moviesCategory,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("Context was used outside the box!");
  return context;
}

export { useMovies, MoviesProvider };
