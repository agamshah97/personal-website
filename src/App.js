import React from 'react';
import './App.css';
import Background from "./Background"
import Introduction from "./Introduction"
import Projects from "./Projects"
import About from "./About"
import { HashRouter, Switch, Route } from "react-router-dom"
import ContactDetails from "./ContactDetails"
import NavBar from './NavBar';

function App() {
  return (
    <HashRouter>
      <div className="outer-box">
        <div className="display-box">
          <NavBar />
          <Switch>
            <Route path="/introduction" component={Introduction}></Route>
            <Route path="/background" component={Background}></Route> 
            <Route path="/projects" component={Projects}></Route> 
            <Route path="/about" component={About}></Route>     
          </Switch>
          <ContactDetails />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
