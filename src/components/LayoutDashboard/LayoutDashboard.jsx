import React from "react";
import { useEffect, useState } from "react";
import "./LayoutDashboard.scss";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "pages";
import { Home } from "pages";
import MenuDashboard from "./MenuDashboard";
import HeaderDashboard from "./HeaderDashboard";
import Autentication from "utils/auth/autentication";
import { Loader } from "components";

const LayoutDashboard = (props) => {
  const [user, setUser] = useState(false);

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
    return props.history.location.pathname === "/dashboard";
  };

  return (
    <div className="LayoutDashboard">
      {compare() ? <div></div> : <MenuDashboard />}

      <div className="content">
        <HeaderDashboard history={props.history} user={user} />
        {user ? (
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/:id/" component={Home} />
            <Route exact path="/dashboard/:id/" component={Home} />
          </Switch>
        ) : (
          <Loader />
        )}
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
