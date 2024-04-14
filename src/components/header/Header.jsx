import { useNavigate } from "react-router-dom";
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
        <h1 className="header-title">Netflix</h1>
        <input
          type="text"
          placeholder="Enter movie name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="header-right">
          <p style={{ color: "white" }}>UNLIMITED TV SHOWS & MOVIES</p>
          <button className="join-now-btn">{currentUser.displayName}</button>
          <button className="log-out-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
