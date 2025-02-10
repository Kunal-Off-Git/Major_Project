import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import '../assets/css/bootstrap.min.css';
// import '../assets/css/owl.carousel.min.css';
import '../assets/css/slicknav.css';
import '../assets/css/flaticon.css';
import '../assets/css/progressbar_barfiller.css';
import '../assets/css/gijgo.css';
import '../assets/css/animate.min.css';
import '../assets/css/animated-headline.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/slick.css';
import '../assets/css/nice-select.css';
import '../assets/css/style.css';
// import './Login.css';

function Login() {
  return (
<main
  className="login-body"
  style={{
    backgroundImage: "url('../assets/img/hero/h1_hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  }}
>
{/* Preloader
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="Loading" />
            </div>
          </div>
        </div>
      </div> */}

      {/* Login Form */}
      <form className="form-default" action="dashboard.html" method="POST">
        <div className="login-form">
          {/* Logo */}
          <div className="logo-login">
            <a href="/"><img src="/assets/img/logo/loder.png" alt="Logo" /></a>
          </div>
          <h2>Login Here</h2>
          
          {/* Email Input */}
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          {/* Password Input */}
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>

          {/* Submit Button */}
          <div className="form-input pt-30">
            <input type="submit" name="submit" value="Login" />
          </div>

          {/* Links */}
          <a href="#" className="forget">Forget Password</a>
          {/* <a href="/register" className="registration">Registration</a> */}
          <Link to="/register" className="registeration">Registration</Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
