import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
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
