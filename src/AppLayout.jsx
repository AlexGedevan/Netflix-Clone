import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useMovies } from "./context/moviesContext";
function AppLayout() {
  const { currentUser } = useMovies();
  return (
    <div>
      {currentUser && <Header />}
      <Outlet />
    </div>
  );
}

export default AppLayout;
