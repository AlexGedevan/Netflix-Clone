import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MoviesProvider } from "./context/moviesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MoviesProvider>
    <App />
  </MoviesProvider>
  // </React.StrictMode>
);
