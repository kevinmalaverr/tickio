import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { Link } from "react-router-dom";
import { Store } from "reducer";

const EventHome = (props) => {
  const [event, setEvent] = useState({});
  const { state, dispatch } = useContext(Store);
  console.log(state);

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
    <div className="EventHome">
      <div className="back"></div>
      <div className="EventHome-container">
        <div className="EventHome-content">
          <div className="event-name">
            <h1 className="f-title">{event.title}</h1>
            <h2 className="f-large">{event.status}</h2>
          </div>
          <div className="content-card shadow b-radius">
            <h1>Your Event isn't Published</h1>
            <Link to={`/dashboard/${props.match.params.id}/preferences`}>
              <button className="btn">Go to Config</button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default EventHome;
