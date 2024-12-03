import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file

function LoginPage({ onAuthenticate }) {
  const [isLogin, setIsLogin] = useState(true); // Tracks whether we're in login or signup mode

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
            <form
              action="#"
              className="login"
              onSubmit={(e) => {
                e.preventDefault();
                onAuthenticate(); // Simulate login
              }}
            >
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
                  onClick={() => setIsLogin(false)} // Switch to signup mode
                >
                  Signup now!
                </button>
              </div>
            </form>
          ) : (
            <form
              action="#"
              className="signup"
              onSubmit={(e) => {
                e.preventDefault();
                onAuthenticate(); // Simulate signup
              }}
            >
              <div className="field">
                <input type="text" placeholder="Email Address" required />
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
