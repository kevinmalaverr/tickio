import React from "react";

const Selector = (props) => {
  const { id, state, getState, label } = props;

  const change = (event) => {
    getState(event);
  };

  return (
    <div className="selector">
      <div
        id={id}
        onClick={change}
        className={`selector-icon ${state ? "on" : ""}`}
      />
      <p className="selector-label">{label}</p>
    </div>
  );
};

export default Selector;
