import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

class Event {
  constructor() {
    this.db = firebase.firestore();
  }

  async createEvent(uid, title, eid) {
    const ref = this.db.collection("events").doc(eid);
    const refDoc = await ref.set({
      uid: uid,
      title: title,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });

    this.db
      .collection("users")
      .doc(uid)
      .collection("user_events")
      .add({
        eventID: eid,
        eventTitle: title,
      })
      .catch((e) => console.error(e));
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
