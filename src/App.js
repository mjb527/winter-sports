import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
// import SportDir from './components/SportDir/sport-dir';
// import SportContent from '.components/SportContent/sport-content';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />

      </Router>

    </div>
  );
}

export default App;
