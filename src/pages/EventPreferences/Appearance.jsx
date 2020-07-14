import React, { useState } from "react";
import { EditionCard } from "components";
import { Field } from "components/_common";

const Appearance = () => {
  const [editApperance, setEditApperance] = useState(false);
  return (
    <EditionCard
      title="Apperance"
      onedit={editApperance}
      setOnedit={setEditApperance}
    >
      <p>Title</p>
      <Field />

      <p>Description</p>
      <Field textarea />
    </EditionCard>
  );
};

export default Appearance;
