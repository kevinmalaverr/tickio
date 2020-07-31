import React, { Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound, Register } from "pages";
import { Loader } from "components";

const Home = lazy(() => import("pages/Home/Home"));
const Login = lazy(() => import("pages/Login/Login"));
const LayoutDashboard = lazy(() =>
  import("components/LayoutDashboard/LayoutDashboard")
);

const FormEvent = lazy(() => import("pages/FormEvent/FormEvent"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
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

export default App;
