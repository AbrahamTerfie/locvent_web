import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
const notAuthenticatedRoutes = {
  signin: "/signin",
  signUp: "/signUp",
};

export const NotAuthenticated = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={notAuthenticatedRoutes.signin} component={Login} />
        <Route exact path={notAuthenticatedRoutes.signUp} component={Register} />
      </Switch>
    </Router>
  );
};
