import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();
function MoviesProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log(isSignedIn);
  return (
    <MoviesContext.Provider value={{ isSignedIn }}>
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
