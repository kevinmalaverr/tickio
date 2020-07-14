import React from "react";
import "./EditionCard.scss";

const EditionCard = (props) => {
  const { children, onedit, setOnedit, save, title } = props;
  return (
    <div className="EditionCard shadow b-radius">
      <div className="EditionCard__header">
        <h2 className="f-header">{title}</h2>
        {onedit ? (
          <div className="align">
            <button
              onClick={() => {
                setOnedit(false);
              }}
              className="btn btn-out margin-r100"
            >
              cancel
            </button>
            <button onClick={() => save()} className="btn">
              Save
            </button>
          </div>
        ) : (
          <button onClick={() => setOnedit(true)}>
            <i className="material-icons">create</i>
          </button>
        )}
      </div>
      <div className="EditionCard__content">{children}</div>
    </div>
  );
};

export default EditionCard;
