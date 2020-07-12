import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

const EventHome = (props) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id);
    const db = firebase.firestore();
    db.collection("events")
      .doc(id)
      .get()
      .then((query) => {
        console.log(query.data());
        setEvent(query.data());
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div>
      {event ? (
        <div>
          <h1>{event.title}</h1>
          <h1>{event.uid}</h1>
        </div>
      ) : null}
    </div>
  );
};

export default EventHome;
