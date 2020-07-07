import * as firebase from "firebase/app";
import 'firebase/firebase-firestore'

class Event{

  constructor() {
    this.db = firebase.firestore()
    const settings = { timestampsInSnapshots : true}
    this.db.settings(settings)
  }

  createEvent(uid, title, description){
    return this.db.collection('events').add({
      uid: uid,
      title: title,
      description: description,
      date: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then( refDoc =>{
      console.log(refDoc.id)
    })
    .catch( e => console.error(e))
  }

}

export default Event