import { Link } from "react-router-dom";
import landingImage from "../../images/landingImage.jpg";
import "./landingPage.css";
function LandingPage() {
  return (
    <div className="landing-page">
      <img src={landingImage} className="landing-image" alt="Landing img" />
      <div className="absolute-header">
        <h1 className="header-title">NETFLIX</h1>
        <div className="header-right">
          <select className="select-lang">
            <option>English</option>
            <option>ქართული</option>
          </select>
          <Link to="/register" className="sign-in-btn">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="landing-absolute-main">
        <h1 className="main-title">Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-div">
          <input
            className="input-email"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="input-email"
            type="text"
            placeholder="Email Address"
          />
          <button className="get-started-btn">
            <p>Sign in</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="btn-arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
