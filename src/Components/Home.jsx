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
import seleniumIcon from "../assets/images/programming-language-icons/selenium.png"
import mysqlIcon from "../assets/images/programming-language-icons/mysql.png"
import gitIcon from "../assets/images/programming-language-icons/git.png"
import pythonIcon from "../assets/images/programming-language-icons/python.png"
import djangoIcon from "../assets/images/programming-language-icons/django.png"
import htmlIcon from "../assets/images/programming-language-icons/html.png"
import cssIcon from "../assets/images/programming-language-icons/css.png"
import jsIcon from "../assets/images/programming-language-icons/js.png"
import reactIcon from "../assets/images/programming-language-icons/react.png"

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          <h2>The courses we offer are 100% job oriented</h2>
        </div>
        <div className="course-container">
          <div className="course-card">
            <div className="card-header">
              <h1>Java Full Stack</h1>
            </div>
            <div className="course-icons">
              <img src={javaIcon} width={50}/>
              <img src={hibernateIcon} width={50} />
              <img src={springBootIcon} width={50} />
              <img src={mysqlIcon} width={50} />
            </div>
            <div className="course-description">
              <p id="course-description">Core JAVA, JEE, Advanced Java, Hibernate, Spring Boot, MySQL</p>
              <p id="course-description">Duration: 6 months</p>
              <p id="course-price">Course price: <span id="orange">39,000</span></p>
            </div>
            <div className="course-button">
              <button id="course-btn">Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header">
              <h1>A/M Testing</h1>
            </div>
            <div className="course-icons">
            <img src={javaIcon} width={50}/>
            <img src={seleniumIcon} width={50}/>
            <img src={gitIcon} width={50}/>
            </div>
            <div className="course-description">
              <p id="course-description">Core JAVA, Selenium, Automatic and Manual Testing, TestNG, Git</p>
              <p id="course-description">Duration: 6 months</p>
              <p id="course-price">Course price: <span id="orange">32,000</span></p>
            </div>
            <div className="course-button">
              <button id="course-btn">Enroll</button>
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
            <p id="course-description">Python, Django, Flask, MySQL, FastAPI, GraphQL</p>
            <p id="course-description">Duration: 6 months</p>
            <p id="course-price">Course price: <span id="orange">34,000</span></p>
            </div>
            <div className="course-button">
               <button id="course-btn">Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header">
              <h1>Front-end Development</h1>
            </div>
            <div className="course-icons">
              <img src={htmlIcon} width={50}/>
              <img src={cssIcon} width={50} />
              <img src={jsIcon} width={50} />
              <img src={reactIcon} width={50} />
            </div>
            <div className="course-description">
              <p id="course-description">HTML, CSS, JavaScript, React.js</p>
              <p id="course-description">Duration: 5 months</p>
              <p id="course-price">Course price: <span id="orange">28,000</span></p>
            </div>
            <div className="course-button">
              <button id="course-btn">Enroll</button>
            </div>
          </div>
          <div className="course-card">
            <div className="card-header"></div>
            <div className="course-icons"></div>
            <div className="course-description"></div>
            <div className="course-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
