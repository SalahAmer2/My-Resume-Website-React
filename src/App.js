import React from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/my-projects' component={MyProjects} />
        <Route path='/my-certificates' component={MyCertificates} />
      </Switch>
    </div>
  );
}

export default App;
