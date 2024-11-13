import React from "react";
import qspiderLogo from "../assets/logo/qspidersvg.svg";
import "../styles/home.css";
import menuicon from "../assets/icons/menu.svg";
import closeicon from "../assets/icons/close.svg";

const Home = () => {
  return (
    <div>
      <nav className="nav-container">
        <h3 id="logo">Qspiders</h3>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" id="bookdemo">BOOK A DEMO</a></li>
          <li className="menu-btn">
            <img src={menuicon} alt="Menu Icon" height={26} width={26} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
