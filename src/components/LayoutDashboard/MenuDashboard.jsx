import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logo_dark } from "images";

const MenuDashboard = (props) => {
  const { currentEvent } = props;
  const handleMenu = () => {
    document.getElementById("menuDashboard").classList.toggle("active");
  };

  return (
    <div id="menuDashboard" className="nav">
      <div className="menu-container">
        <div className="menu-header">
          <div className="menu-logo">
            <Link>
              <img className="image fill-main" src={logo_dark} alt="" />
            </Link>
          </div>
          <button>
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="menu-nav-container" data-simplebar>
          <nav>
            <ul>
              <li>
                <Link to={`/dashboard/${currentEvent}`}>
                  <button className="menu-item">
                    <i className="material-icons">home</i>
                    <p>home</p>
                  </button>
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${currentEvent}/preferences`}>
                  <button className="menu-item">
                    <i className="material-icons">miscellaneous_services</i>
                    <p>Preferences</p>
                  </button>
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${currentEvent}/settings`}>
                  <button className="menu-item">
                    <i className="material-icons">how_to_reg</i>
                    <p>Registered</p>
                  </button>
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${currentEvent}/settings`}>
                  <button className="menu-item">
                    <i className="material-icons">settings</i>
                    <p>Settings</p>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="over-dashboard" onClick={handleMenu}></div>
    </div>
  );
};

export default MenuDashboard;
