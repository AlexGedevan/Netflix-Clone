import { Link, useNavigate } from "react-router-dom";
import { useMovies } from "../../context/moviesContext";
import "./header.css";
import { useState } from "react";

function Header() {
  const { currentUser, setCurrentUser, setQuery } = useMovies();

  const navigate = useNavigate();

  function handleLogOut() {
    setCurrentUser(null);

    navigate("/");
  }

  return (
    <div className="section-header">
      <div className="header">
        <Link to="/home" className="header-title">
          Netflix
        </Link>
        <input
          type="text"
          placeholder="Enter movie name..."
          onChange={(e) => setQuery(e.target.value)}
          className="header-input"
        />
        <div className="header-right">
          <p style={{ color: "white" }}>UNLIMITED TV SHOWS & MOVIES</p>
          <Link to="/subscriptions" className="join-now-btn">
            Subscribe
          </Link>
          <button className="log-out-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
