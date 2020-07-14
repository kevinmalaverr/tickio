import React, { useState } from "react";
import { Selector, Field } from "components/_common";
import { EditionCard } from "components";
import "./EventPreferences.scss";
import Appearance from "./Appearance";
import Requirements from "./Requirements";

const EventPreferences = () => {
  return (
    <div className="EventPreferences">
      <Appearance />
      <Requirements />
    </div>
  );
};

export default EventPreferences;
