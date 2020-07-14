import React, { useState } from "react";
import { Selector, Field } from "components/_common";
import "./EventPreferences.scss";

const EventPreferences = () => {
  const [requirements, setRequirements] = useState({});

  const handleRequirements = (event) => {
    console.log(event.target.id);
    setRequirements({
      ...requirements,
      [event.target.id]: requirements[event.target.id] ? false : true,
    });
  };

  return (
    <div className="EventPreferences">
      <div className="content-card b-radius">
        <div className="content-card__edit">
          <i className="material-icons">create</i>
        </div>
        <h2>Apperance</h2>
        <form action="">
          <input
            className="regular-form"
            type="text"
            value="normal text"
            disabled
          />
          <input className="regular-form" type="text" value="normal text" />
          <label htmlFor="tea">Display Text</label>
          <textarea
            className="regular-form"
            name=""
            id="tea"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
      <div className="content-card b-radius">
        <h2>Requirements</h2>
        <form action="">
          <Selector
            id="names"
            label="Names"
            state={requirements.names}
            getState={handleRequirements}
          ></Selector>
          <Selector
            id="email"
            label="Email"
            state={requirements.email}
            getState={handleRequirements}
          ></Selector>
          <Selector
            id="age"
            label="Age"
            state={requirements.age}
            getState={handleRequirements}
          ></Selector>
          <Selector
            id="phone"
            label="Phone number"
            state={requirements.phone}
            getState={handleRequirements}
          ></Selector>
        </form>
      </div>
    </div>
  );
};

export default EventPreferences;
