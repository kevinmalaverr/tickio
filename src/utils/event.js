import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

class Event {
  constructor() {
    this.db = firebase.firestore();
  }

  async createEvent(uid, title, eid) {
    try {
      //create new doc into the events
      this.db.collection("events").doc(eid).set({
        uid: uid,
        title: title,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // create a doc into the user's events
      this.db.collection("users").doc(uid).collection("user_events").add({
        eventID: eid,
        eventTitle: title,
      });
    } catch (e) {
      return e;
    }
  }

  async getEvents(uid) {
    let list = [];
    await this.db
      .collection("users")
      .doc(uid)
      .collection("user_events")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
      });

    return list;
  }

  async checkIfExist(eid) {
    const doc = await this.db.collection("events").doc(eid).get();
    if (doc.exists) {
      return true;
    }
    return false;
  }
}

export default Event;
