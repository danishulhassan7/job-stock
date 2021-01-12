import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Freelancing } from './components/Freelancing';
import { Home } from './components/Home';

function App() {
  return (
    <React.Fragment>
    <Router>
        <Switch>
        <Route exact path="/" component={ Home } />
          <Route path="/freelancing" component={ Freelancing } />
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
