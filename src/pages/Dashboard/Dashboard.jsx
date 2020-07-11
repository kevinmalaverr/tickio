import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Dashboard.scss";
import { EventCard } from "components";
import { ProfilePhoto, Button } from "components/_common";
import { Modal } from "components";
import * as firebase from "firebase/app";
import "firebase/auth";
import Event from "utils/event";

import CreateNewEvent from "./CreateNewEvent";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const list = [0, 1, 6, 7, 5, 1, 1, 3];

  const createNewEvent = () => {
    setShowModal(true);
  };

  const get = async () => {
    const user = await firebase.auth().currentUser;
    const event = new Event();
    const li = await event.getEvents(user.uid);
    console.log(li);
  };

  get();

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
          {list.map((item) => {
            return <EventCard />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
