import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useMovies } from "./context/moviesContext";
function AppLayout() {
  const { hasSignedIn } = useMovies();
  return (
    <div>
      {hasSignedIn && <Header />}
      <Outlet />
    </div>
  );
}

export default AppLayout;
