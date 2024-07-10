import React from "react";
import "./Navbar.css";
import aniwave from "../../assets/aniwave.png";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="left-nav">
          <div className="logo-bar">
            <i class="fa-solid fa-bars"></i>
            <figure>
              <img src={aniwave} alt="" />
            </figure>
          </div>
          <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search anime..." />
          </div>
          <div className="watch-section">
            <i class="fa-solid fa-play"></i>
            <p>Watch2gether</p>
          </div>
          <div className="watch-section">
            <i class="fa-solid fa-shuffle"></i>
            <p>Random</p>
          </div>
          <div className="watch-section">
            <i class="fa-solid fa-book"></i>
            <p>Read Manga</p>
          </div>
          <div className="toggle-language">
            <span>EN</span>
            <span>JP</span>
          </div>
        </div>
        <button className="sign-in-button" >
          <p>Sign In</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
