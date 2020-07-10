import * as firebase from "firebase/app";
import "firebase/auth";

// Singleton pattern for use Autentication
class Autentication {
  instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Autentication();
    }
    return this.instance;
  }

  async signInGoogle(cb) {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    cb();
  }

  async signInEmail(email, password) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (result.user.emailVerified) {
        return { emailE: "", passE: "" };
      } else {
        firebase.auth().signOut();
        return { emailE: "The email has not been verified", passE: "" };
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          return { emailE: "The user not has been registered", passE: "" };
        case "auth/wrong-password":
          return { emailE: "", passE: "Wrong password" };
        default:
          return { emailE: "An error has ocurred", passE: "" };
      }
    }
  }

  async createAcountEmailPass(email, password, names) {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      result.user.updateProfile({ displayName: names });
      const configuracion = { url: "http://localhost:3000/hola" };

      result.user.sendEmailVerification(configuracion).catch((error) => {
        console.error(error);
      });

      firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }

  listen(fun) {
    firebase.auth().onAuthStateChanged((user) => fun(user));
  }

  signOut() {
    firebase.auth().signOut();
  }
}

export default Autentication;
