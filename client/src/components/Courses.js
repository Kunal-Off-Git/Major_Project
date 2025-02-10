import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
// import '../assets/css/owl.carousel.min.css';
import "../assets/css/slicknav.css";
import "../assets/css/flaticon.css";
import "../assets/css/progressbar_barfiller.css";
import "../assets/css/gijgo.css";
import "../assets/css/animate.min.css";
import "../assets/css/animated-headline.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/slick.css";
import "../assets/css/nice-select.css";
import "../assets/css/style.css";
import CoursesContainer from "./CoursesContainer";

function Courses() {
  return (
    <>
      {/* ? Preloader Start */}
      {/* <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle" />
        <div className="preloader-img pere-text">
          <img src="assets/img/logo/loder.png" alt="" />
        </div>
      </div>
    </div>
  </div> */}
      {/* Preloader Start */}
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
                            {/* <a href="index.html">Home</a> */}
                            <Link to="/#">Home</Link>
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
                            {/* <a href="#">Blog</a> */}
                            <Link to="/blog">Blog</Link>
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
                                <Link to="/elements">Elements</Link>
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
      <main>
        {/*? slider Area Start*/}
        <section className="slider-area slider-area2">
          <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider slider-height2">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-11 col-md-12">
                    <div className="hero__caption hero__caption2">
                      <h1 data-animation="bounceIn" data-delay="0.2s">
                        Our courses
                      </h1>
                      {/* breadcrumb Start*/}
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            {/* <a href="index.html">Home</a> */}
                            <Link to="/#">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            {/* <a href="#">Services</a> */}
                            <Link to="/services">Services</Link>
                          </li>
                        </ol>
                      </nav>
                      {/* breadcrumb End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Courses area start */}
        <CoursesContainer />
        {/* Courses area End */}
        {/*? top subjects Area Start */}
        <div className="topic-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Explore top subjects</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic1.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic2.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic3.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic4.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic5.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic6.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic7.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/topic8.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>
                          <a href="#">Programing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-tittle text-center mt-20">
                  {/* <a href="courses.html" className="border-btn"> */}
                  {/* View More Subjects */}
                  {/* </a> */}
                  <Link to="/courses" className="border-btn">
                    View More Subjects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top subjects End */}
        {/* ? services-area */}
        <div className="services-area services-area2 section-padding40">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-30">
                  <div className="features-icon">
                    <img src="assets/img/icon/icon1.svg" alt="" />
                  </div>
                  <div className="features-caption">
                    <h3>60+ UX courses</h3>
                    <p>The automated process all your website tasks.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-30">
                  <div className="features-icon">
                    <img src="assets/img/icon/icon2.svg" alt="" />
                  </div>
                  <div className="features-caption">
                    <h3>Expert instructors</h3>
                    <p>The automated process all your website tasks.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-30">
                  <div className="features-icon">
                    <img src="assets/img/icon/icon3.svg" alt="" />
                  </div>
                  <div className="features-caption">
                    <h3>Life time access</h3>
                    <p>The automated process all your website tasks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-wrappper footer-bg">
          {/* Footer Start*/}
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      {/* logo */}
                      <div className="footer-logo mb-25">
                        {/* <a href="index.html"> */}
                        <Link to="/#">
                          <img src="assets/img/logo/logo2_footer.png" alt="" />
                          {/* </a> */}
                        </Link>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>
                            The automated process starts as soon as your clothes
                            go into the machine.
                          </p>
                        </div>
                      </div>
                      {/* social */}
                      <div className="footer-social">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="https://bit.ly/sai4ull">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Our solutions</h4>
                      <ul>
                        <li>
                          <a href="#">Design &amp; creatives</a>
                        </li>
                        <li>
                          <a href="#">Telecommunication</a>
                        </li>
                        <li>
                          <a href="#">Restaurant</a>
                        </li>
                        <li>
                          <a href="#">Programing</a>
                        </li>
                        <li>
                          <a href="#">Architecture</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Support</h4>
                      <ul>
                        <li>
                          <a href="#">Design &amp; creatives</a>
                        </li>
                        <li>
                          <a href="#">Telecommunication</a>
                        </li>
                        <li>
                          <a href="#">Restaurant</a>
                        </li>
                        <li>
                          <a href="#">Programing</a>
                        </li>
                        <li>
                          <a href="#">Architecture</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Company</h4>
                      <ul>
                        <li>
                          <a href="#">Design &amp; creatives</a>
                        </li>
                        <li>
                          <a href="#">Telecommunication</a>
                        </li>
                        <li>
                          <a href="#">Restaurant</a>
                        </li>
                        <li>
                          <a href="#">Programing</a>
                        </li>
                        <li>
                          <a href="#">Architecture</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer-bottom area */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </div>
      </footer>
      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i className="fas fa-level-up-alt" />
        </a>
      </div>
      {/* JS here */}
      {/* Jquery, Popper, Bootstrap */}
      {/* Jquery Mobile Menu */}
      {/* Jquery Slick , Owl-Carousel Plugins */}
      {/* One Page, Animated-HeadLin */}
      {/* Date Picker */}
      {/* Nice-select, sticky */}
      {/* Progress */}
      {/* counter , waypoint,Hover Direction */}
      {/* contact js */}
      {/* Jquery Plugins, main Jquery */}
    </>
  );
}
export default Courses;
