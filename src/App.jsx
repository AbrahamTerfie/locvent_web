
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { routes } from './Routes/routes';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Broadcast from './pages/Broadcast/Broadcast';
import Settings from './pages/Settings/Settings';
import Reports from './pages/Reports/Reporrs';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Auth/login'
import Store from './Context/DataContext'


import { useLocation } from 'react-router-dom'

function AppContainer() {

  const location = useLocation();
  console.log('current route ', location.pathname);
  return (
    <Store>
      <Router>
        {location.pathname === '/login' ? null : <Navbar />}
        <main>
          <Switch>
            <Route path={routes.home} exact>
              <Login />
            </Route>
            <Route path={routes.login} exact>
              <Home />
            </Route>

            <Route path={routes.broadcast} exact>
              <Broadcast />
            </Route>
            <Route path={routes.settings} exact>
              <Settings />
            </Route>
            <Route path={routes.contacts} exact>
              <Contact />
            </Route>
            <Route path={routes.reports} exact>
              <Reports />
            </Route>
            <Redirect to={routes.home} />
          </Switch>
        </main>
      </Router>
    </Store>
  )
}

export default function App(props) {

  return (
    <div>
      <AppContainer />
    </div>

  );
}
