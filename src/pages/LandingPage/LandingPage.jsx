import { Link, useNavigate } from "react-router-dom";
import landingImage from "../../images/landingImage.jpg";
import "./landingPage.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useMovies } from "../../context/moviesContext";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState("");

  const { setCurrentUser, currentUser } = useMovies();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (currentUser) {
        navigate("/home");
      }
    },
    [currentUser, navigate]
  );

  function handleSignIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
        setSignInError("Invalid credentials!");
      });
  }

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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="input-email"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="get-started-btn" onClick={handleSignIn}>
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
          <p className="sign-in-error-message">{signInError}</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
