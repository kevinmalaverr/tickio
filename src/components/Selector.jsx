import React from "react";

const Selector = (props) => {
  const { id, state, getState, label, disabled } = props;

  const change = (event) => {
    getState(event);
  };

  return (
    <div className="selector">
      <div
        id={id}
        onClick={disabled ? null : change}
        className={`selector-icon ${state ? "on" : ""}  ${
          disabled ? "disabled" : ""
        }`}
      />
      <p className="selector-label">{label}</p>
    </div>
  );
};

export default Selector;
