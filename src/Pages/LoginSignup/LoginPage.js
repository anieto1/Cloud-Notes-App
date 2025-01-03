import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css"; // Import the CSS file

function LoginPage({ onAuthenticate }) {
  const [isLogin, setIsLogin] = useState(true); // Tracks whether we're in login or signup mode
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    onAuthenticate(); // Call the authentication logic
    navigate("/home"); // Redirect to the home page
  };

  const handleSignup = (e) => {
    e.preventDefault();
    onAuthenticate(); // Call the authentication logic
    navigate("/home"); // Redirect to the home page
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? "login" : "signup"}`}>
          {isLogin ? "Login Form" : "Signup Form"}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={() => setIsLogin(true)}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={() => setIsLogin(false)}
          />
          <label htmlFor="login" className="slide login">
            Login
          </label>
          <label htmlFor="signup" className="slide signup">
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form action="#" className="login" onSubmit={handleLogin}>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <button type="button" className="link-button">
                  Forgot password?
                </button>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsLogin(false)}
                >
                  Signup now
                </button>
              </div>
            </form>
          ) : (
            <form action="#" className="signup" onSubmit={handleSignup}>
              <div className="field">
                <input type="email"  id="email" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Confirm Password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
