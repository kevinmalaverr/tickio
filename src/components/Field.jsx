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
    textarea,
    disabled,
  } = props;

  const handleChange = (event) => {
    if (handle) {
      handle(event.target.value, id);
    }
  };

  return (
    <div className="field-container">
      <div
        className={`field shadow ${error ? "error" : null} ${
          textarea ? "text-area" : null
        }`}
      >
        {children ? <div className="field__icon">{children}</div> : null}

        {textarea ? (
          <textarea
            id={id}
            onChange={handleChange}
            placeholder={placeholder}
            value={defaultValue}
            rows="5"
            disabled={disabled}
          ></textarea>
        ) : (
          <input
            id={id}
            onChange={handleChange}
            type={type}
            placeholder={placeholder}
            value={defaultValue}
            disabled={disabled}
          />
        )}

        {error ? <i className="material-icons">error</i> : null}
      </div>
      <div className="error-message f-small">{error}</div>
    </div>
  );
};

export default Field;
