import React from 'react';
import './App.css';

// components
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';
import SportDir from './components/SportDir/sport-dir';
import SportContent from '.components/SportContent/sport-content';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />

      <div className="row">

        <div className="">
          { /* left side, shows the sport and some of the options for it */ }
          <SportDir />
        </div>

        <div className="">
          { /* right side, shows the page content */ }
          <SportContent />
        </div>

      </div>

    <Footer />

    </div>
  );
}

export default App;
