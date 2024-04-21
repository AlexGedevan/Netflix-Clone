import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Home from "./pages/home/Home";
import Error from "./components/error/Error";
import Subsriptions from "./pages/subscriptions/Subsriptions";
import MoviePage from "./pages/MoviePage/MoviePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/subscriptions",
        element: <Subsriptions />,
      },
      {
        path: "/MoviePage/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
