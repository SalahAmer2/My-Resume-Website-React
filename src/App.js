import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from "./components/navbar/navbar.component";
import IntroPart from "./components/introPart/introPart.component";
import AboutMe from "./pages/about-me/about-me.component";
import MyProjects from "./pages/my-projects/my-projects.component";
import MyCertificates from "./pages/my-certificates/my-certificates.component";
import Footer from "./components/footer/footer.component";

const App = () => (
  <div>
    <BrowserRouter>
      <NavBar />
      <IntroPart />
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/my-projects' component={MyProjects} />
        <Route path='/my-certificates' component={MyCertificates} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);


export default App;
