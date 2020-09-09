import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Donate from './Pages/Donate/donate';
import Sport from './Pages/Sports/Layout/index';
import Home from './Pages/Home/home';
import PageNotFound from './Pages/PageNotFound';
import Learn from './Pages/Learn'

// components
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/sports/:sport" component={Sport} />
          <Route exact path="/learn" component={Learn} />
          <Route component={PageNotFound} />
        </Switch>
      <Footer />

      </Router>

    </div>
  );
}

export default App;
