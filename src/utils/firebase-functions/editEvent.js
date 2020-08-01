import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

export function editApperance() {}

export async function getPreferences(eid) {
  const db = firebase.firestore();
  const res = await db.collection("preferences").doc(eid).get();
  return res.data();
}

export async function setPreferences(eid) {
  const db = firebase.firestore();
  const res = await db
    .collection("preferences")
    .doc(eid)
    .set({
      appearance: {
        title: "tit",
        description: "des",
      },
      requirements: {
        names: true,
        email: true,
        phone: true,
      },
    });
}

export function setPreferencesAppearance(eid, appearance) {
  const db = firebase.firestore();
  db.collection("preferences").doc(eid).update({
    appearance: appearance,
  });
}

export function setPreferencesRequirements(eid, requirements) {
  const db = firebase.firestore();
  db.collection("preferences").doc(eid).update({
    requirements: requirements,
  });
}

export function uploadImage(eid, file) {
  const refStorage = firebase.storage().ref(`logos/${eid}/logoImage`);
  const task = refStorage.put(file);
  return task;
}
