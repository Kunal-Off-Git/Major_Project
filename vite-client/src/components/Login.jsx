import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import axios from "axios";
import Dashboard from "./Dashboard";
import heroImage from "../assets/img/hero/h1_hero.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/StudentDashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main
      className="login-body"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <form className="form-default" onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="logo-login">
            <a href="/">
              <img src="/assets/img/logo/loder.png" alt="Logo" />
            </a>
          </div>
          <h2>Login Here</h2>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-input pt-30">
            <input type="submit" name="submit" value="Login" />
          </div>
          <a href="#" className="forget">
            Forget Password
          </a>
          <Link to="/register" className="registration">
            Registration
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
