import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
// import './assets/css/owl.carousel.min.css';
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
import courses from "../data.js";

function Home() {
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
      <main>
        {/*? slider Area Start*/}
        <section className="slider-area ">
          <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="hero__caption">
                      <h1 data-animation="fadeInLeft" data-delay="0.2s">
                        Online learning
                        <br /> platform
                      </h1>
                      <p data-animation="fadeInLeft" data-delay="0.4s">
                        Build skills with courses, certificates, and degrees
                        online from world-class universities and companies
                      </p>
                      <a
                        href="#"
                        className="btn hero-btn"
                        data-animation="fadeInLeft"
                        data-delay="0.7s"
                      >
                        Join for Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ? services-area */}
        <div className="services-area">
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
        {/* Courses area start */}
        <div className="courses-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Our featured courses</h2>
                </div>
              </div>
            </div>
            <div className="courses-actives">
              {/* Single */}
              <div className="container">
                <div className="row">
                  <div className="properties pb-20 col-5">
                    <div className="properties__card ">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img src={`/${courses[0].imgUrl}`} alt="" />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <p>{courses[0].tag}</p>
                        <h3>
                          <a href="#">{courses[0].name}</a>
                        </h3>
                        <p>{courses[0].description}</p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>{courses[0].price}</span>
                          </div>
                        </div>
                        <Link
                          to={`/courses/${courses[0].id}`}
                          className="border-btn border-btn2"
                        >
                          Find out more
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single */}
                  {/* Single */}
                  <div className="properties pb-20 col-5">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img src={`/${courses[1].imgUrl}`} alt="" />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <p>{courses[1].tag}</p>
                        <h3>
                          <a href="#">{courses[1].name}</a>
                        </h3>
                        <p>{courses[1].description}</p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>{courses[1].price}</span>
                          </div>
                        </div>
                        <Link
                          to={`/courses/${courses[1].id}`}
                          className="border-btn border-btn2"
                        >
                          Find out more
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single */}
                  {/* Single */}
                  <div className="properties pb-20 col-5">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img src={`/${courses[2].imgUrl}`} alt="" />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <p>{courses[2].tag}</p>
                        <h3>
                          <a href="#">{courses[2].name}</a>
                        </h3>
                        <p>{courses[2].description}</p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>{courses[2].price}</span>
                          </div>
                        </div>
                        <Link
                          to={`/courses/${courses[2].id}`}
                          className="border-btn border-btn2"
                        >
                          Find out more
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single */}
                  {/* Single */}
                  <div className="properties pb-20 col-5">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img src={`/${courses[3].imgUrl}`} alt="" />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <p>{courses[3].tag}</p>
                        <h3>
                          <a href="#">{courses[3].name}</a>
                        </h3>
                        <p>{courses[3].description}</p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>{courses[3].price}</span>
                          </div>
                        </div>
                        <Link
                          to={`/courses/${courses[3].id}`}
                          className="border-btn border-btn2"
                        >
                          Find out more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single */}
            </div>
          </div>
        </div>
        {/* Courses area End */}
        {/*? About Area-1 Start */}
        <section className="about-area1 fix pt-10">
          <div className="support-wrapper align-items-center">
            <div className="left-content1">
              <div className="about-icon">
                <img src="assets/img/icon/about.svg" alt="" />
              </div>
              {/* section tittle */}
              <div className="section-tittle section-tittle2 mb-55">
                <div className="front-text">
                  <h2 className="">
                    Learn new skills online with top educators
                  </h2>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>
                    Techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together. Online learning is as easy and natural.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-content1">
              {/* img */}
              <div className="right-img">
                <img src="assets/img/gallery/about.png" alt="" />
                <div className="video-icon">
                  <a
                    className="popup-video btn-icon"
                    href="https://www.youtube.com/watch?v=up68UAfH0d0"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Area End */}
        {/*? top subjects Area Start */}
        <div className="topic-area section-padding40">
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
                  <a href="courses.html" className="border-btn">
                    View More Subjects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top subjects End */}
        {/*? About Area-3 Start */}
        <section className="about-area3 fix">
          <div className="support-wrapper align-items-center">
            <div className="right-content3">
              {/* img */}
              <div className="right-img">
                <img src="assets/img/gallery/about3.png" alt="" />
              </div>
            </div>
            <div className="left-content3">
              {/* section tittle */}
              <div className="section-tittle section-tittle2 mb-20">
                <div className="front-text">
                  <h2 className="">
                    Learner outcomes on courses you will take
                  </h2>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>
                    Techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src="assets/img/icon/right-icon.svg" alt="" />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together. Online learning is as easy and natural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Area End */}
        {/*? Team */}
        <section className="team-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Community experts</h2>
                </div>
              </div>
            </div>
            <div className="team-active">
              <div className="single-cat text-center">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team1.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Mr. Urela</a>
                  </h5>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
              <div className="single-cat text-center">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team2.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Mr. Uttom</a>
                  </h5>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
              <div className="single-cat text-center">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team3.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Mr. Shakil</a>
                  </h5>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
              <div className="single-cat text-center">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team4.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Mr. Arafat</a>
                  </h5>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
              <div className="single-cat text-center">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team3.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Mr. saiful</a>
                  </h5>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services End */}
        {/*? About Area-2 Start */}
        <section className="about-area2 fix pb-padding">
          <div className="support-wrapper align-items-center">
            <div className="right-content2">
              {/* img */}
              <div className="right-img">
                <img src="assets/img/gallery/about2.png" alt="" />
              </div>
            </div>
            <div className="left-content2">
              {/* section tittle */}
              <div className="section-tittle section-tittle2 mb-20">
                <div className="front-text">
                  <h2 className="">
                    Take the next step toward your personal and professional
                    goals with us.
                  </h2>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                  <a href="#" className="btn">
                    Join now for Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Area End */}
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
                        <a href="index.html">
                          <img src="assets/img/logo/logo2_footer.png" alt="" />
                        </a>
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
                        Copyright © All rights reserved
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

export default Home;
