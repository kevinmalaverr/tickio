import React, { useState } from "react";
import { EditionCard } from "components";
import { Selector } from "components/_common";

const Requirements = () => {
  const [requirements, setRequirements] = useState({});
  const handleRequirements = (event) => {
    console.log(event.target.id);
    setRequirements({
      ...requirements,
      [event.target.id]: requirements[event.target.id] ? false : true,
    });
  };

  return (
    <EditionCard
      title="Requirements"
      onedit={requirements}
      setOnedit={setRequirements}
    >
      <form action="">
        <Selector
          id="names"
          label="Names"
          state={requirements.names}
          getState={handleRequirements}
        ></Selector>
        <Selector
          id="email"
          label="Email"
          state={requirements.email}
          getState={handleRequirements}
        ></Selector>
        <Selector
          id="phone"
          label="Phone number"
          state={requirements.phone}
          getState={handleRequirements}
        ></Selector>
      </form>
    </EditionCard>
  );
};

export default Requirements;
