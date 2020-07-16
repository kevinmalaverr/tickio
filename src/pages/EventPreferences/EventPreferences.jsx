import React, { useState, useEffect } from "react";
import { Selector, Field } from "components/_common";
import { EditionCard, Loader } from "components";
import "./EventPreferences.scss";
import Appearance from "./Appearance";
import Requirements from "./Requirements";
import { getPreferences, setPreferences } from "utils/editEvent";

const EventPreferences = (props) => {
  const [data, setData] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    getPreferences(props.match.params.id).then((res) => {
      console.log(res);
      if (res) {
        setData(res);
      }
      setFinished(true);
    });
    return () => {};
  }, []);

  if (finished) {
    return (
      <div className="EventPreferences">
        <Appearance eid={props.match.params.id} data={data.appearance || {}} />
        <Requirements
          eid={props.match.params.id}
          data={data.requirements || {}}
        />
      </div>
    );
  }
  return <Loader />;
};

export default EventPreferences;
