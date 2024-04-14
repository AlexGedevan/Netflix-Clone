import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const storedItems = JSON.parse(localStorage.getItem("user"));

  const [currentUser, setCurrentUser] = useState(storedItems);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <MoviesContext.Provider
      value={{ currentUser, setCurrentUser, error, setError }}
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
