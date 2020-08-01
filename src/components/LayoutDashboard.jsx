import React from "react";
import { useEffect, useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, EventHome, NotFound, UserSettings } from "pages";
import MenuDashboard from "./MenuDashboard";
import HeaderDashboard from "./HeaderDashboard";
import Autentication from "utils/firebase-functions/autentication";
import { EventPreferences } from "pages";
import { Store, reducer, defStore } from "reducer";

const LayoutDashboard = (props) => {
  const [state, dispatch] = useReducer(reducer, defStore);

  useEffect(() => {
    const auth = Autentication.getInstance();
    auth.listen((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          value: { ...user },
        });
      } else {
        // TODO: gestionar si no hay usuario
      }
    });
    return () => {
      dispatch({
        type: "SET_USER",
        value: null,
      });
    };
  }, []);

  const compare = () => {
    return (
      props.history.location.pathname === "/dashboard" ||
      props.history.location.pathname === "/dashboard/"
    );
  };

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="LayoutDashboard">
        {compare() ? (
          <div></div>
        ) : (
          <MenuDashboard currentEvent={props.match.params.id} />
        )}

        <div className="content">
          {state.user ? (
            <>
              <HeaderDashboard
                history={props.history}
                user={state.user}
                currentEvent={props.match.params.id}
              />
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route
                  exact
                  path="/dashboard/user-settings"
                  component={UserSettings}
                />
                <Route exact path="/dashboard/:id" component={EventHome} />
                <Route
                  exact
                  path="/dashboard/:id/preferences"
                  component={EventPreferences}
                />
                <Route component={NotFound} />
              </Switch>
            </>
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
    </Store.Provider>
  );
};

export default LayoutDashboard;
