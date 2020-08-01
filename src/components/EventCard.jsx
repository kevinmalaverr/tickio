import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  const { event } = props;

  return (
    <Link to={`/dashboard/${event.eventID}`}>
      <div className="EventCard shadow">
        <div className="title">
          <h2 className="f-regular">{event.eventTitle}</h2>
          <p className="f-small c-light">{event.eventID}</p>
        </div>
        <div className="details"></div>
        <div className="status">
          <p className="c-green w-bold f-small">Published</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
