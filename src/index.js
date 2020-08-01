import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound, Register } from "pages";
import { Loader } from "components";
import "./index.scss";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

// firebase conf ===============================================
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// lazy load components ========================================
const Home = lazy(() => import("pages/Home"));
const Login = lazy(() => import("pages/Login"));
const FormEvent = lazy(() => import("pages/FormEvent"));
const LayoutDashboard = lazy(() => import("components/LayoutDashboard"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/dashboard/:id" component={LayoutDashboard} />
        <Route path="/dashboard/" component={LayoutDashboard} />
        <Route exact path="/event/:id" component={FormEvent} />
        <Route path="/loader" component={Loader} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
