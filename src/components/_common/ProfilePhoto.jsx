import React from "react";
import EmergentCard from "./EmergentCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfilePhoto = (props) => {
  const { image, userName, email } = props;
  const [sign, setSign] = useState(false);

  const handleClick = () => {
    console.log("click");
    setSign(sign ? false : true);
  };

  return (
    <>
      <div className="ProfilePhoto" on onClick={handleClick}>
        <img src={image} alt="" />
        <EmergentCard active={sign}>
          <div className="profile-options f-small">
            <img src={image} alt="" className="margin-b100" />
            <p>{userName}</p>
            <p className="c-light w-light margin-b300">{email}</p>
            <ul className="profile-options__list">
              <button>Account settings</button>
              <button>LogOut</button>
            </ul>
          </div>
        </EmergentCard>
      </div>
    </>
  );
};

export default ProfilePhoto;
