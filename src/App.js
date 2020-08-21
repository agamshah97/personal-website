import React from 'react';
import './App.css';
import Background from "./Background"
import Introduction from "./Introduction"
import Projects from "./Projects"
import About from "./About"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import ContactDetails from "./ContactDetails"
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <HashRouter>
      <Container fluid className="outer-box">
        <div className="display-box">
          <NavBar />
          <Switch>
            <Route path="/introduction" render={() => {window.scrollTo(0,0); return <Introduction />}}></Route>
            <Route path="/background" render={() => {window.scrollTo(0,0); return <Background />}}></Route> 
            <Route path="/projects" render={() => {window.scrollTo(0,0); return <Projects />}}></Route> 
            <Route path="/about" render={() => {window.scrollTo(0,0); return <About />}}></Route>
            <Route path="/">
              <Redirect to="/introduction" />
            </Route>     
          </Switch>
          <ContactDetails />
        </div>
      </Container>
    </HashRouter>
  );
}

export default App;
