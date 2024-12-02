import React, { useState } from "react";
import qspiderLogo from "../assets/logo/qspidersvg.svg";
import "../styles/home.css";
import menuicon from "../assets/icons/menu.svg";
import closeicon from "../assets/icons/close.svg";
import codingAnimation from "../assets/lottie-assets/coding.json";
import Lottie from "lottie-react";
import javaIcon from "../assets/images/programming-language-icons/java.png";
import hibernateIcon from "../assets/images/programming-language-icons/hibernate.png";
import springBootIcon from "../assets/images/programming-language-icons/spring-boot.png";
import seleniumIcon from "../assets/images/programming-language-icons/selenium.png";
import mysqlIcon from "../assets/images/programming-language-icons/mysql.png";
import gitIcon from "../assets/images/programming-language-icons/git.png";
import pythonIcon from "../assets/images/programming-language-icons/python.png";
import djangoIcon from "../assets/images/programming-language-icons/django.png";
import htmlIcon from "../assets/images/programming-language-icons/html.png";
import cssIcon from "../assets/images/programming-language-icons/css.png";
import jsIcon from "../assets/images/programming-language-icons/js.png";
import reactIcon from "../assets/images/programming-language-icons/react.png";
import corporateIcon from "../assets/images/programming-language-icons/corporate.png";
import certificateIcon from "../assets/icons/certificate.png";
import chaireIcon from "../assets/icons/chair.png";
import clockIcon from "../assets/icons/clock.png";
import personIcon from "../assets/icons/person.png";
import facebookIcon from "../assets/icons/socials/facebook.png"
import instagramIcon from "../assets/icons/socials/instagram.png"
import linkedinIcon from "../assets/icons/socials/linkedin.png"
import twitterIcon from "../assets/icons/socials/twitter.png"
import youtubeIcon from "../assets/icons/socials/youtube.png"
import CourseModal from "./CourseModal";
import ChartModule from "./ChartModule";
import AutoScrollingTestimonials from "./AutoScrollingTestimonials ";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEnroll = (course) => {
    console.log("handleEntroll:", course);
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleFormSubmit = (data) => {
    console.log("Enrolled data:", selectedCourse);
    setFormData(data);
    console.log("Enrollment details:", formData);
    setOpen(false);
  };

  return (
    <div>
      <div className="header-color">
        <nav className="nav-container">
          <h3 id="logo">
            <span id="orange">Q</span>spiders
          </h3>
          <ul className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
            <li onClick={toggleSidebar}>
              <img src={closeicon} id="icon" alt="Close Icon" />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" id="bookdemo-res">
                BOOK A DEMO
              </a>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" id="bookdemo">
                BOOK A DEMO
              </a>
            </li>
          </ul>
          {/* Menu button */}
          <div className="menu-btn" onClick={toggleSidebar}>
            <img
              src={menuicon}
              id="icon"
              alt="Menu Icon"
              height={26}
              width={26}
            />
          </div>
        </nav>

        <div className="intro-container">
          <div className="intro-text">
            <h1 id="main-text">
              Level up your development skills in <span id="orange">Q</span>
              spiders
            </h1>
            <h2 id="sub-text">
              Are you a recent IT graduate looking to enhance your programming
              skills?
            </h2>
            <h3 id="sub-text-last">
              Look no further—we've got you <span id="orange">covered!</span>
            </h3>
            <h3 id="sub-text">
              We have placed over <span id="orange">300000+</span> aspirants all
              over India!!
            </h3>
            <h3 id="sub-text-link">
              <a href="https://placements.qspiders.com/">
                👉 Check out our placement statistics
              </a>
            </h3>
          </div>
          <div className="intro-banner">
            <Lottie animationData={codingAnimation} loop={true} />
          </div>
        </div>
      </div>
      <div className="course-section">
        <div className="course-intro">
          <h1 id="orange">Explore the Training Programs We Offer</h1>
          <h2>The courses we offer are 💯 job oriented</h2>
        </div>
        <div className="course-container">
          <div className="course-card">
            <div className="card-header">
              <h1>Java Full Stack</h1>
            </div>
            <div className="course-icons">
              <img src={javaIcon} width={50} />
              <img src={hibernateIcon} width={50} />
              <img src={springBootIcon} width={50} />
              <img src={mysqlIcon} width={50} />
            </div>
            <div className="course-description">
              <p id="course-description">
                Core JAVA, JEE, Advanced Java, Hibernate, Spring Boot, MySQL
              </p>
              <p id="course-description">Duration: 6 months</p>
              <p id="course-price">
                Course price: <span id="orange">39,000</span>
              </p>
            </div>
            <div className="course-button">
              <button
                id="course-btn"
                onClick={() => handleEnroll("Java Full Stack")}
              >
                Enroll
              </button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header">
              <h1>A/M Testing</h1>
            </div>
            <div className="course-icons">
              <img src={javaIcon} width={50} />
              <img src={seleniumIcon} width={50} />
              <img src={gitIcon} width={50} />
            </div>
            <div className="course-description">
              <p id="course-description">
                Core JAVA, Selenium, Automatic and Manual Testing, TestNG, Git
              </p>
              <p id="course-description">Duration: 6 months</p>
              <p id="course-price">
                Course price: <span id="orange">32,000</span>
              </p>
            </div>
            <div className="course-button">
              <button
                id="course-btn"
                onClick={() => handleEnroll("Automatic and Manual Testing")}
              >
                Enroll
              </button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header">
              <h1>Python Full Stack</h1>
            </div>
            <div className="course-icons">
              <img src={pythonIcon} width={50} />
              <img src={djangoIcon} width={50} />
              <img src={mysqlIcon} width={50} />
            </div>
            <div className="course-description">
              <p id="course-description">
                Python, Django, Flask, MySQL, FastAPI, GraphQL
              </p>
              <p id="course-description">Duration: 6 months</p>
              <p id="course-price">
                Course price: <span id="orange">34,000</span>
              </p>
            </div>
            <div className="course-button">
              <button
                id="course-btn"
                onClick={() => handleEnroll("Python Full Stack")}
              >
                Enroll
              </button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header">
              <h1>Front-end Development</h1>
            </div>
            <div className="course-icons">
              <img src={htmlIcon} width={50} />
              <img src={cssIcon} width={50} />
              <img src={jsIcon} width={50} />
              <img src={reactIcon} width={50} />
            </div>
            <div className="course-description">
              <p id="course-description">HTML, CSS, JavaScript, React.js</p>
              <p id="course-description">Duration: 5 months</p>
              <p id="course-price">
                Course price: <span id="orange">28,000</span>
              </p>
            </div>
            <div className="course-button">
              <button
                id="course-btn"
                onClick={() => handleEnroll("Front-end Development")}
              >
                Enroll
              </button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header">
              <h1>Corporate Training</h1>
            </div>
            <div className="course-icons">
              <img src={corporateIcon} width={70} />
            </div>
            <div className="course-description">
              <p id="course-description">
                Communication, Decesion Making, Problem Solving
              </p>
              <p id="course-description">Duration: 2-3 weeks</p>
              <p id="course-price">
                Course price: <span id="orange">28,000</span>
              </p>
            </div>
            <div className="course-button">
              <button
                id="course-btn"
                onClick={() => handleEnroll("Corporate training")}
              >
                Enroll
              </button>
            </div>
          </div>
        </div>
        <CourseModal
          open={open}
          onClose={() => setOpen(false)}
          selectedCourse={selectedCourse}
          onSubmit={handleFormSubmit}
        />
      </div>
      <div className="about-us">
        <div className="about-us-bg">
          <div className="about-title">
            <h1 id="aboutheader-h1">
              Why <br /> choose us?
            </h1>
            <h2 id="aboutheader-h2">
              Our trainers are experienced professionals with industry
              expertise, ensuring you gain a clear understanding of real-world
              implementations.
            </h2>
          </div>
          <div className="icons-container">
            <div className="icon-box-wh">
              <img src={chaireIcon} width={50} />
              <p>Placements</p>
            </div>
            <div className="icon-box">
              <img src={personIcon} width={50} />
              <p>Professional trainers</p>
            </div>
            <div className="icon-box-btm">
              <img src={clockIcon} width={50} />
              <p>24x7 Support</p>
            </div>
            <div className="icon-box-wh-btm">
              <img src={certificateIcon} width={50} />
              <p>Certification</p>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-container">
        <div className="stats-intro">
          <h1 id="stats-h1">
            We have placed over <span id="orange-highlight">3lakh+</span> <br />{" "}
            students all over India, both from CS and non-CS backgrounds
          </h1>
        </div>
        <div className="piechart-text-container">
          <div className="piechart-container">
            <ChartModule />
          </div>
          <div className="stats-text">
            <ul>
              <li id="cs-list-item">
                <h2>CS Background: 56.8%</h2>
              </li>
              <li id="noncs-list-item">
                <h2>Non CS Background: 43.2%</h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="stats-outro">
          <p>
            Our comprehensive training program equips you with industry-standard
            knowledge and practical skills to excel in your career.
          </p>
        </div>
      </div>
      <div className="review-container">
        <h1 id="review-intro">Checkout what people say about us</h1>
        <AutoScrollingTestimonials />
      </div>
      <div className="bookdemo-container">
        <div className="bookdemo-title">
          <h1 id="bookdemo-title-h">Interested?</h1>
          <h2 id="bookdemo-subtitle">
            Book a demo class for <span id="orange">free!</span>
          </h2>
        </div>
        <div className="bookdemo-btn-container">
          <button id="bookdemocontainer-btn">BOOK DEMO!</button>
        </div>
        <div className="bookdemo-outro">
          <p id="bookdemo-para">this process takes less than a minute!</p>
        </div>
      </div>
      <div className="goal-container">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/q5aCA5z_qdg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="goal-text">
          <h1 id="goal-header">
            Our goal and vision in <span id="orange">q</span>Spiders
          </h1>
          <p id="goal-para">
            Our mission is to empower every student who successfully completes
            our specialized courses to launch a rewarding career. We offer
            extensive placement support, including resume building, mock
            interviews, aptitude test training, and interview coaching. We are
            dedicated to providing continuous placement assistance until each
            student lands a fulfilling position.
          </p>
        </div>
      </div>
      <div className="map-container">
        <div className="map-header">
          <h1 id="map-header-text">📍Find us here</h1>
        </div>
        <div className="map-embed-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1169407323728!2d76.30105457431046!3d10.007198372912278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d46c006e3c3%3A0x6c523cb492f9c72b!2sQSpiders%20Kochi!5e0!3m2!1sen!2sin!4v1732551320290!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-container">
      <div className="footer-socials">
          <h2>Check out our social pages</h2>
          <div className="footer-social-icons">
            <img src={instagramIcon} width={30}/>
            <img src={facebookIcon} width={30}/>
            <img src={twitterIcon} width={30}/>
            <img src={linkedinIcon} width={30}/>
            <img src={youtubeIcon} width={30}/>
          </div>
        </div>
        <div className="footer-lower">
          /* as */
        <div className="footer-logo">
          <h3 id="logo">
            <span id="orange">Q</span>spiders
          </h3>
        </div>
        <div className="footer-inqueries">
          <h3 id="inquery-1">Have inqueries?</h3>
          <h3 id="inquery-2">Talk to us!</h3>
        </div>
        <div className="footer-location"></div>
        </div>
        <div className="footer-ars-section">
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
