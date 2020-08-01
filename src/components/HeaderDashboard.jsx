import React from "react";
import { Link } from "react-router-dom";
import { ProfilePhoto } from "components";
import { logo } from "images";
import { default_user_photo } from "images";

const HeaderDashboard = (props) => {
  const { user } = props;

  const compare = () => {
    return props.history.location.pathname === "/dashboard";
  };

  const handleMenu = () => {
    document.getElementById("menuDashboard").classList.toggle("active");
  };

  return (
    <div className="dashboard__header shadow">
      <div className="left">
        {compare() ? (
          <Link to="/dashboard">
            <img className="image-logo" src={logo}></img>
          </Link>
        ) : (
          <button onClick={handleMenu} className="btn-menu margin-r100 large">
            <i className="material-icons">menu</i>
          </button>
        )}
      </div>

      <div className="middle"></div>

      <div className="right">
        <button className="btn-container margin-r100 large">
          <i className="material-icons">notifications</i>
        </button>
        <ProfilePhoto
          image={user.photoURL ? user.photoURL : default_user_photo}
          userName={user.displayName}
          email={user.email}
        />
        <p className="f-small w-light margin-l100">{user.displayName}</p>
      </div>
    </div>
  );
};

export default HeaderDashboard;
