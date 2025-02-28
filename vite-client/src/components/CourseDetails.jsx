import React from "react";
import courses from "../data.js";

import { Link, useParams } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
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

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses[id - 1];
  return (
    <>
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
                      <img src="/assets/img/logo/logo.png" alt="logo" />
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

      {/* Course details container */}
      <div className="details-container">
        <div className="details-top">
          <div className="details-img">
            <img src={`/${course.imgUrl}`} alt="" />
          </div>
          <div className="details-right">
            <h1 className="details-name">{course.name}</h1>
            <h3 className="details-price">{course.price}</h3>
            <button className="btn btn-large">
              <Link to="/Video">Watch Now</Link>
            </button>
            <button className="btn btn-large ml-3">Ask a doubt</button>
          </div>
        </div>
        <p>
          {course.details[0]}
          <br />
          <br />
          {course.details[1]}
          <br />
          <br />
          {course.details[2]}
          <br />
          <br />
          {/* The automated process all your website tasks. Discover tools and
          techniques to engage effectively with vulnerable children and young
          people.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis impedit veniam error ullam voluptas, ab odit ipsum earum
          officia hic, voluptatum veritatis suscipit dicta natus molestias
          facilis aliquam. Odio, atque.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis impedit veniam error ullam voluptas, ab odit ipsum earum
          officia hic, voluptatum veritatis suscipit dicta natus molestias
          facilis aliquam. Odio, atque.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis impedit veniam error ullam voluptas, ab odit ipsum earum
          officia hic, voluptatum veritatis suscipit dicta natus molestias
          facilis aliquam. Odio, atque. */}
        </p>
      </div>
    </>
  );
};

export default CourseDetails;
