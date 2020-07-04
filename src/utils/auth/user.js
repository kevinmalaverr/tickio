import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class User{
  displayName
  isUser

  static getUser(){
    if(!this.user){
      this.user = new User()
    }
    
    return this.user
  }
}

export default User