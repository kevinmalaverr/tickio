import React, { useState } from "react";
import { EditionCard } from "components";
import { Field } from "components/_common";
import { setPreferencesAppearance, uploadImage } from "utils/editEvent";

const Appearance = (props) => {
  const [editApperance, setEditApperance] = useState(false);
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");

  const edit = () => {
    setPreferencesAppearance(props.eid, form);
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const task = uploadImage(props.eid, file);
    task.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage);
      },
      (err) => {
        console.error(err);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          setImage(url);
          setForm({
            ...form,
            imageURL: url,
          });
        });
      }
    );
  };

  const handleForm = (input, target) => {
    setForm({
      ...form,
      [target]: input,
    });
  };

  return (
    <EditionCard
      title="Apperance"
      onedit={editApperance}
      setOnedit={setEditApperance}
      save={edit}
    >
      <p className="f-large margin-b100">Title:</p>
      <Field
        id="title"
        defaultValue={form.title}
        handle={handleForm}
        disabled={!editApperance}
      />

      <p className="f-large margin-b100">Description:</p>
      <Field
        id="description"
        defaultValue={form.description}
        handle={handleForm}
        textarea
        disabled={!editApperance}
      />

      <p className="f-large margin-b100">Logo image:</p>
      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        accept="image/*"
        onChange={imageUpload}
        disabled={!editApperance}
      ></input>
      <img src={image} alt="" />
    </EditionCard>
  );
};

export default Appearance;
