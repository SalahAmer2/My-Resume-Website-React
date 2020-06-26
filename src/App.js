import React from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import NavBar from "./components/navbar/navbar.component";
import AboutMe from "./pages/about-me/about-me.component";
import MyProjects from "./pages/my-projects/my-projects.component";
import MyCertificates from "./pages/my-certificates/my-certificates.component";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/my-projects' component={MyProjects} />
        <Route path='/my-certificates' component={MyCertificates} />
      </Switch>
    </div>
  );
}

export default App;
