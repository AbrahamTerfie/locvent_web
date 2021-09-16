
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Overview from "../Pages/Home/Overview";
import Contacts from "../Pages/Home/Contacts";
import Settings from "../Pages/Home/Settings";
import BroadCast from "../Pages/Home/BroadCast";
import Home from "../Pages/Home/Home";

const authenticated = {
  home: "/",
  overview: "/overview",
  contacts: "/contacts",
  broadcast: "/broadcast",
  settings: "/settings",
};

export const AuthenticatedRoutes = () => {
  return (
    JSON.parse(localStorage.getItem("user")).token !== null ?   
      <Router>
          <Switch>
            <Route exact path={authenticated.home} component={Home} />
            <Route exact path={authenticated.overview} component={Overview} />
            <Route exact path={authenticated.contacts} component={Contacts} />
            <Route exact path={authenticated.broadcast} component={BroadCast} />
            <Route exact path={authenticated.settings} component={Settings} />
          </Switch>
        </Router>
       : 
        <Router>
          <Switch>
            <Route exact path={notAuthenticatedRoutes.signin} component={Login} />
            <Route exact path={notAuthenticatedRoutes.signUp} component={Register} />
          </Switch>
        </Router>
      )
    
   
};
