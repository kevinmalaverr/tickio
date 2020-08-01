import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { EventCard } from "components";
import { ProfilePhoto } from "components";
import { Modal } from "components";
import * as firebase from "firebase/app";
import "firebase/auth";
import Event from "utils/firebase-functions/event";

import CreateNewEvent from "../components/CreateNewEvent";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const event = new Event();
    event.getEvents(user.uid).then((list) => setEventList(list));

    return () => {
      setEventList([]);
    };
  }, []);

  const createNewEvent = () => {
    setShowModal(true);
  };

  return (
    <div>
      {showModal ? (
        <Modal>
          <button className="Modal-close" onClick={() => setShowModal(false)}>
            <i className="material-icons">close</i>
          </button>
          <CreateNewEvent />
        </Modal>
      ) : null}
      <div className="bg-image"></div>
      <div className="container">
        <div className="margin-b300">
          <h1 className="f-title c-white">Your Events</h1>
        </div>
        <div className="event-list">
          <div className="EventCard shadow center" onClick={createNewEvent}>
            <p className="f-title">+</p>
            <h2 className="f-regular">Add new event</h2>
          </div>
          {eventList
            ? eventList.map((item) => {
                return <EventCard event={item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
