import React, { useState, useEffect } from "react";
import { EditionCard } from "components";
import { Selector } from "components/_common";
import { setPreferencesRequirements } from "utils/firebase-functions/editEvent";

const Requirements = (props) => {
  const [onEdit, setOnEdit] = useState(false);
  const [form, setForm] = useState(props.data);

  const edit = () => {
    setPreferencesRequirements(props.eid, form);
  };

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.id]: form[event.target.id] ? false : true,
    });
  };

  return (
    <EditionCard
      title="Requirements"
      onedit={onEdit}
      setOnedit={setOnEdit}
      save={edit}
    >
      <form>
        <Selector
          id="names"
          label="Names"
          state={form.names}
          getState={handleForm}
          disabled={!onEdit}
        ></Selector>
        <Selector
          id="email"
          label="Email"
          state={form.email}
          getState={handleForm}
          disabled={!onEdit}
        ></Selector>
        <Selector
          id="phone"
          label="Phone number"
          state={form.phone}
          getState={handleForm}
          disabled={!onEdit}
        ></Selector>
      </form>
    </EditionCard>
  );
};

export default Requirements;
