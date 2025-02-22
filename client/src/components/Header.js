import React from "react";
import { Link } from "react-router-dom";
// import './Header.css';

function Header() {
  return (
    <header>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <a href="#">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li className="active">
                            <Link to="#">Home</Link>
                          </li>
                          <li>
                            {/* <a href="courses.html">Courses</a> */}
                            <Link to="/courses">Courses</Link>
                          </li>
                          <li>
                            {/* <a href="about.html">About</a> */}
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                            <ul className="submenu">
                              <li>
                                {/* <a href="blog.html">Blog</a> */}
                                <Link to="/blog">Blog</Link>
                              </li>
                              <li>
                                {/* <a href="blog_details.html">Blog Details</a> */}
                                <Link to="/blog_details">Blog Details</Link>
                              </li>
                              <li>
                                {/* <a href="elements.html">Element</a> */}
                                <Link to="/elements">Element</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {/* <a href="contact.html">Contact</a> */}
                            <Link to="/contact">Contact</Link>
                          </li>
                          {/* Button */}
                          <li className="button-header margin-left ">
                            <a href="#" className="btn">
                              Join
                            </a>
                          </li>
                          <li className="button-header">
                            {/* <a href="login.html" className="btn btn3">
                                Log in
                              </a> */}
                            <Link to="/login" className="btn btn3">
                              Login
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
}

export default Header;
