import React from "react";
import { Link } from "react-router-dom";
import { logo } from "images";
import { Menu } from "components";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="Tickio logo" />
        </Link>
        <div className="menu-container">
          <Menu>
            <a href="#how-to-use">
              <li>How to use</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </Menu>
          <div className="buttons">
            <Link to="/login">
              <button className="btn btn-white">Dashboard</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
