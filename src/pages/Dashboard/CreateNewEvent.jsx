import React, { useState } from "react";
import { Field } from "components/_common";
import Event from "utils/event";
import * as firebase from "firebase/app";
import "firebase/auth";

const CreateNewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventID, setEventID] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  const handleForm = (input) => {
    setEventName(input);
    if (input.length === 0) {
      setError("");
    } else if (input.length >= 4) {
      setReady(true);
      setError("");
    } else {
      setError("the name should has at least of 4 chars");
      setReady(false);
    }
  };

  const create = () => {
    const event = new Event();
    const user = firebase.auth().currentUser;
    event.createEvent(user.uid, eventName, eventName);
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
        Project ID: {eventName}
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
