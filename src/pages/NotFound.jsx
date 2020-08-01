import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="margin-b300">
        <h1 className="display">404</h1>
        <h1 className="title">The page was not found</h1>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
