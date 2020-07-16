import React, { useState, useEffect } from "react";
import { Selector, Field } from "components/_common";
import { EditionCard } from "components";
import "./EventPreferences.scss";
import Appearance from "./Appearance";
import Requirements from "./Requirements";
import { getPreferences, setPreferences } from "utils/editEvent";

const EventPreferences = (props) => {
  useEffect(() => {
    getPreferences(props.match.params.id).then((res) => console.log(res));

    return () => {};
  }, []);

  return (
    <div className="EventPreferences">
      <Appearance eid={props.match.params.id} />
      <Requirements eid={props.match.params.id} />
    </div>
  );
};

export default EventPreferences;
