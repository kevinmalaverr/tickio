import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfilePhoto } from "components/_common";
import { logo } from "images";
import { user_photo } from "images";
import Autentication from "utils/auth/autentication";

const HeaderDashboard = (props) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const auth = Autentication.getInstance();
    auth.listen((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(false);
      }
    });

    return () => {
      setUser(false);
    };
  }, []);

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
          <button
            onClick={handleMenu}
            className="btn-container margin-r100 large"
          >
            <i className="material-icons">menu</i>
          </button>
        )}
      </div>

      <div className="middle"></div>

      <div className="right">
        <button className="btn-container margin-r100 large">
          <i className="material-icons">notifications</i>
        </button>
        <ProfilePhoto image={user_photo} />
        <p className="f-small w-light margin-l100">{user.displayName}</p>
      </div>
    </div>
  );
};

export default HeaderDashboard;
