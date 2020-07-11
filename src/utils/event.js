import * as firebase from "firebase/app";
import "firebase/firebase-firestore";

class Event {
  constructor() {
    this.db = firebase.firestore();
  }

  async createEvent(uid, title, eid) {
    const refDoc = await this.db.collection("events").doc(eid).set({
      uid: uid,
      title: title,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });

    this.db
      .collection("users")
      .doc(uid)
      .collection("user_events")
      .add({
        eventId: eid,
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
}

export default Event;
