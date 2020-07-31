import React, { useState } from "react";
import { Field } from "components/_common";
import Event from "utils/event";
import * as firebase from "firebase/app";
import "firebase/auth";
import { generateEventId, safeForEventName } from "utils/generateEventId";
import { useHistory } from "react-router-dom";

const CreateNewEvent = (props) => {
  const [eventName, setEventName] = useState("");
  const [eventID, setEventID] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  let history = useHistory();

  const handleForm = async (input) => {
    setEventName(input);
    if (input.length === 0) {
      setError("");
      return;
    }

    const validation = safeForEventName(input);
    if (validation.error) {
      setError(validation.message);
      setReady(false);
    } else {
      let eid = validation.message;
      const event = new Event();
      const exist = await event.checkIfExist(eid);
      if (exist) {
        eid = generateEventId(eid);
      }
      setEventID(eid);
      setError("");
      setReady(true);
    }
  };

  const create = async () => {
    const user = firebase.auth().currentUser;
    const event = new Event();
    let error = await event.createEvent(user.uid, eventName, eventID);
    if (!error) {
      history.push(`/dashboard/${eventID}`);
    }
  };

  return (
    <div className="create-new-event">
      <h1 className="f-headline margin-b200">
        Start with the name of your Event
      </h1>
      <form action="">
        <Field
          id="eventName"
          handle={handleForm}
          error={error}
          defaultValue={eventName}
        ></Field>
      </form>

      <p className="f-large c-light w-light margin-b300">
        Project ID: {eventID}
      </p>
      <div>
        <button className="btn" onClick={create} disabled={!ready}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateNewEvent;
