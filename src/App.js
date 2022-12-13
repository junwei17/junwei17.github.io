import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import WorkPage from './pages/work';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/" , "/resume-website"]} component={Home} exact />
        <Route path='/Work' component={WorkPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
