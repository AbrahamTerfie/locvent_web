
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from './Routes/routes'

import Signup from './Pages/Auth/Signin/';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home/Home';

import "./App.css";

function App() {
  return (


    <Switch>
      <Route path={routes.signin} component={Signup} />
      <Route path={routes.register} component={Register} />
      <Route path={routes.home} component={Home} />
    </Switch>


  );
}

export default App;
