import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Freelancing } from './components/Freelancing';

function App() {
  return (
    <React.Fragment>
    <Router>
        <Switch>
          <Route path="/freelancing" component={ Freelancing } />
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
