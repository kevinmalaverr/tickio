import React, { useState, useEffect } from "react";
import { Selector, Field } from "components";
import { EditionCard, Loader } from "components";
import { Appearance } from "components";
import { Requirements } from "components";
import {
  getPreferences,
  setPreferences,
} from "utils/firebase-functions/editEvent";

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
