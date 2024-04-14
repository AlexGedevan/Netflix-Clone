import "./header.css";

function Header() {
  return (
    <div className="section-header">
      <div className="header">
        <h1 className="header-title">Netflix</h1>
        <div className="header-right">
          <p style={{ color: "white" }}>UNLIMITED TV SHOWS & MOVIES</p>
          <button className="join-now-btn">JOIN NOW</button>
          <button className="log-out-btn">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
