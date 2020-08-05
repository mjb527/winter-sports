import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Donate from './Pages/Donate/donate';
import Sport from './Pages/Sports/Layout/index';
import Home from './Pages/Home/home';
import PageNotFound from './Pages/PageNotFound';

// components
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route exact path="/sports/:sport">
            <Sport />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      <Footer />

      </Router>

    </div>
  );
}

export default App;
