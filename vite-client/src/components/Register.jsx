import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log("Response from server:", result.data)
        navigate('/login');
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <main
      className="login-body"
      style={{
        backgroundImage: `url(${require("../assets/img/hero/h1_hero.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <form className="form-default" onSubmit={handleSubmit} method="POST">
        <div className="login-form">
          <div className="logo-login">
            <Link to="/#"><img src="/assets/img/logo/loder.png" alt="Logo" /></Link>
          </div>
          <h2>Registration Here</h2>
          <div className="form-input">
            <label htmlFor="name">Full name</label>
            <input type="text" name="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-input pt-30">
            <input type="submit" name="submit" value="Registration" />
          </div>
          <Link to="/login" className='registration'>Login</Link>
        </div>
      </form>
    </main>
  );
}

export default Register;
