import { Link, useNavigate } from "react-router-dom";
import landingImage from "../../images/landingImage.jpg";
import "./RegisterPage.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import { useMovies } from "../../context/moviesContext";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfirmPassowrd] = useState("");

  const navigate = useNavigate();

  const db = getFirestore(app);

  const { setCurrentUser, currentUser } = useMovies();

  useEffect(
    function () {
      if (currentUser) {
        navigate("/home");
      }
    },
    [currentUser, navigate]
  );

  function handleRegister() {
    if (password !== comfirmPassword) throw new Error("Passwords dont match");

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="register-page">
      <img src={landingImage} className="landing-image" alt="Landing img" />
      <div className="absolute-header">
        <h1 className="header-title">NETFLIX</h1>
        <div className="header-right">
          <select className="select-lang">
            <option>English</option>
            <option>ქართული</option>
          </select>
          <Link to="/" className="sign-in-btn">
            Sign In
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
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            className="input-email"
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="input-email"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            className="input-email"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassowrd(e.target.value)}
            value={comfirmPassword}
          />
          <button className="get-started-btn" onClick={handleRegister}>
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

export default RegisterPage;
