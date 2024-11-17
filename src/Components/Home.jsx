import React, { useState } from "react";
import qspiderLogo from "../assets/logo/qspidersvg.svg";
import "../styles/home.css";
import menuicon from "../assets/icons/menu.svg";
import closeicon from "../assets/icons/close.svg";
import codingAnimation from '../assets/lottie-assets/coding.json'
import Lottie from "lottie-react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="header-color">
        <nav className="nav-container">
          <h3 id="logo"><span id="orange">Q</span>spiders</h3>
          <ul className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
            <li onClick={toggleSidebar}>
              <img src={closeicon} id="icon" alt="Close Icon" />
            </li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" id="bookdemo-res">BOOK A DEMO</a></li>
          </ul>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" id="bookdemo">BOOK A DEMO</a></li>
          </ul>
          {/* Menu button */}
          <div className="menu-btn" onClick={toggleSidebar}>
            <img src={menuicon} id="icon" alt="Menu Icon" height={26} width={26} />
          </div>
        </nav>

        <div className="intro-container">
          <div className="intro-text">
            <h1 id="main-text">Level up your development skills in Qspiders</h1>
            <h2 id="sub-text">Learn from experts who have real industry experience and get certified!</h2>
            <h3>We have placed over 1000+ students all across India</h3>
          </div>
          <div className="intro-banner">
            <Lottie animationData={codingAnimation} loop={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
