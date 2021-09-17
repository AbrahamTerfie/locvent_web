
import React, { useContext } from 'react';
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
import Store, { Context } from './Context/DataContext'
import { useLocation } from 'react-router-dom'

function AppContainer() {

  const { loggedIN, setLoggedIn } = useContext(Context)
  const location = useLocation();
  console.log('current route ', location.pathname);
  console.log('login Status  ', loggedIN);

  return (
    <Router>
      { JSON.parse(localStorage.getItem("user")) !== null ?   <Navbar /> : null}

      <main>
      {(JSON.parse(localStorage.getItem("user")) !== null && JSON.parse(localStorage.getItem("user")) !== undefined )? 
      <Switch>
      <Route path={'/'} exact>
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
    </Switch>
        :
        <Switch>
          <Route  exact>
            <Login />
        </Route>
          
        </Switch>

      }
        
      </main>
    </Router>

  )
}

export default function App(props) {





  return (
    <div>

      <Store>
        <AppContainer />

      </Store>
    </div>

  );
}

