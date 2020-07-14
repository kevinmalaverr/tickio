import React from "react";
import { useEffect, useState } from "react";
import "./LayoutDashboard.scss";
import { Switch, Route } from "react-router-dom";
import { Dashboard, EventHome, NotFound } from "pages";
import MenuDashboard from "./MenuDashboard";
import HeaderDashboard from "./HeaderDashboard";
import Autentication from "utils/auth/autentication";
import EventPreferences from "pages/EventPreferences/EventPreferences";

const LayoutDashboard = (props) => {
  const [user, setUser] = useState(false);
  const currentEvent = props.match.params.id;

  useEffect(() => {
    const auth = Autentication.getInstance();
    auth.listen((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        alert("shouls login");
        props.history.push("/login");
      }
    });
  }, []);

  const compare = () => {
    return (
      props.history.location.pathname === "/dashboard" ||
      props.history.location.pathname === "/dashboard/"
    );
  };

  return (
    <div className="LayoutDashboard">
      {compare() ? <div></div> : <MenuDashboard currentEvent={currentEvent} />}

      <div className="content">
        <HeaderDashboard
          history={props.history}
          user={user}
          currentEvent={currentEvent}
        />
        {user ? (
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/:id" component={EventHome} />
            <Route
              exact
              path="/dashboard/:id/preferences"
              component={EventPreferences}
            />
            <Route component={NotFound} />
          </Switch>
        ) : null}
        <footer className="footer-dashboard f-small">
          <p>
            created by{" "}
            <a target="blank" href="https://kevinmalaver.work">
              kevin
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LayoutDashboard;
