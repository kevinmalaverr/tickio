import React, { Children } from "react";
import { useState } from "react";

const Field = (props) => {
  const {
    id,
    type,
    error,
    placeholder,
    defaultValue,
    handle,
    children,
  } = props;

  const handleChange = (event) => {
    if (handle) {
      handle(event.target.value, id);
    }
  };

  return (
    <div className="field-container">
      <div className={`field shadow ${error ? "error" : null}`}>
        {children ? <div className="field__icon">{children}</div> : null}

        <input
          id={id}
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          value={defaultValue}
        />

        {error ? <i className="material-icons">error</i> : null}
      </div>
      <div className="error-message f-small">{error}</div>
    </div>
  );
};

export default Field;
