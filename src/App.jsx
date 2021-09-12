
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from './Routes/routes'

import Signin from './Pages/Auth/Signin/';
import Signup from './Pages/Auth/Signup';
import Home from './Pages/Home/Home';

import "./App.css";

function App() {
  return (


    <Switch>
      <Route path={routes.signin} component={Signin} />
      <Route path={routes.signUp} component={Signup} />
      <Route path={routes.home} component={Home} />
    </Switch>


  );
}

export default App;
