import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//firebase deps
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
 