import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
