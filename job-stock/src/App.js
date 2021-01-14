import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Freelancing } from './components/Freelancing';
import { Home } from './components/Home';
import { TabStyle } from './components/TabStyle';

function App() {
  return (
    <React.Fragment>
    <Router>
        <Switch>
        <Route exact path="/" component={ Home } />
          <Route path="/freelancing" component={ Freelancing } />
          <Route path="/tabStyle" component={ TabStyle } />

        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
