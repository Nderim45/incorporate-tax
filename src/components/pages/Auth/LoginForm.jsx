import { React, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import "./styles/loginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      <form action="">
        <h1>Log In</h1>
        <p>
          Don't have an account? <Link to="">Create New Account</Link>{" "}
        </p>

        <div className="input-content">
          <span>
            <IoIosMail />
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="auth-form-input"
          />
        </div>

        <div className="input-content">
          <span>
            <IoIosMail />
          </span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="auth-form-input"
          />
        </div>

        <div className="keep-logged-div">
          <div className="inner-row">
            <input type="checkbox" name="keep-logged" id="keep-logged" />
            <label htmlFor="keep-logged" className="form-label-checkbox">
              Keep me logged in
            </label>
          </div>
          <Link to="/" className="link">
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <div className="bottom-div">
        <p>©2021 IncorporateTax Inc. All Rights Reserved</p>
        <div className="inline-div">
          <Link to="">Privacy</Link>
          <Link to="" className="security">
            Security
          </Link>
          <Link to="">Accessibility</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
