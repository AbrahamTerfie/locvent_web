

import React, { useState, useContext } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { routes } from './Routes/routes';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Broadcast from './pages/Broadcast/Broadcast';
import Settings from './pages/Settings/Settings';
import Reports from './pages/Reports/Reporrs';
import Navbar from './Components/Navbar/Navbar';


function Main() {
  // const [state, ] = useContext(Context);


  //  console.log(state.activeStation);

  return <h1>this</h1>

}




export default function App() {
  return (
    <Router>
     <Navbar/>
     <main>
       <Switch>
         <Route path={routes.home} exact>
           <Home/>
         </Route>
        
         <Route path={routes.broadcast} exact>
           <Broadcast/>
         </Route>
         <Route path={routes.settings} exact>
           <Settings/>
         </Route>
         <Route path={routes.contacts} exact>
           <Contact/>
         </Route>
         <Route path={routes.reports} exact>
           <Reports/>
         </Route>
         <Redirect to="/" />
       </Switch>
     </main>
    </Router>
   );
}




