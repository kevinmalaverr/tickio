import React from "react";

export const Store = React.createContext();

export const defStore = {
  user: {
    displayName: "",
    uid: "",
    profilePhoto: "",
  },
  events: [{ eid: "", name: "", date: "" }],

  actualProject: {
    eid: "",
    name: "",
    date: "",
    preferences: {
      apperance: "",
      requirements: "",
    },
    registered: [{ name: "", email: "", others: "" }],
    settings: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.value,
      };
    }
    case "SET_EVENTS": {
      return {
        ...state,
        events: action.value,
      };
    }
    case "SET_ACTUAL_PROJECT": {
      return {
        ...state,
        actualProject: action.value,
      };
    }
    default:
      return state;
  }
};
