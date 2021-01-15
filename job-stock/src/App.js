import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Freelancing } from './components/Freelancing';
import { Home } from './components/Home';
import TabStyle  from './components/TabStyle';
import AccordionStyle  from './components/AccordionStyle';
import BrowseResume from './components/BrowseResume';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
    <Router>
        <Switch>
        <Route exact path="/" component={ Home } />
          <Route path="/freelancing" component={ Freelancing } />
          <Route path="/tabStyle" component={ TabStyle } />
          <Route path="/footer" component={ Footer } />
          <Route path="/accordionStyle" component={ AccordionStyle } /> 
          <Route path="/browseResume" component={ BrowseResume } />          
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
