import React from 'react';
import { Link } from 'react-router-dom';
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

function Register() {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>App landing</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.ico" />
      </head>
      
      <body>
        {/* Preloader Start */}
        {/* <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src="../assets/img/logo/loder.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}
        {/* Preloader End */}

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

          {/* Login Admin */}
          <form className="form-default" action="login-bg.mp4" method="POST">
            <div className="login-form">
              <div className="logo-login">
                {/* <a href="index.html"></a> */}
                <Link to="/#"><img src="../assets/img/logo/loder.png" alt="" /></Link>
              </div>
              <h2>Registration Here</h2>

              <div className="form-input">
                <label htmlFor="name">Full name</label>
                <input type="text" name="name" placeholder="Full name" />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-input">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password" placeholder="Confirm Password" />
              </div>
              <div className="form-input pt-30">
                <input type="submit" name="submit" value="Registration" />
              </div>
              {/* <a href="login.html" className="registration">Login</a> */}
              <Link to="/login" className='registeration'>Login</Link>
            </div>
          </form>
        </main>

        {/* Scripts */}
        <script src="../assets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="../assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="../assets/js/popper.min.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/jquery.slicknav.min.js"></script>
        <script src="../assets/js/jquery.vide.js"></script>
        <script src="../assets/js/owl.carousel.min.js"></script>
        <script src="../assets/js/slick.min.js"></script>
        <script src="../assets/js/wow.min.js"></script>
        <script src="../assets/js/animated.headline.js"></script>
        <script src="../assets/js/jquery.magnific-popup.js"></script>
        <script src="../assets/js/gijgo.min.js"></script>
        <script src="../assets/js/jquery.nice-select.min.js"></script>
        <script src="../assets/js/jquery.sticky.js"></script>
        <script src="../assets/js/jquery.barfiller.js"></script>
        <script src="../assets/js/jquery.counterup.min.js"></script>
        <script src="../assets/js/waypoints.min.js"></script>
        <script src="../assets/js/jquery.countdown.min.js"></script>
        <script src="../assets/js/hover-direction-snake.min.js"></script>
        <script src="../assets/js/contact.js"></script>
        <script src="../assets/js/jquery.form.js"></script>
        <script src="../assets/js/jquery.validate.min.js"></script>
        <script src="../assets/js/mail-script.js"></script>
        <script src="../assets/js/jquery.ajaxchimp.min.js"></script>
        <script src="../assets/js/plugins.js"></script>
        <script src="../assets/js/main.js"></script>
      </body>
    </div>
  );
}

export default Register;
