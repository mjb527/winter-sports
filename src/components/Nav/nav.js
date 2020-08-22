import React from 'react';
import { Link } from 'react-router-dom';
import LeftText from '../LeftText/leftText';

import './nav.css';

function Nav() {

  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <a className="navbar-brand d-inline-flex" href="/">
          <img src="/imgs/snowflake.png" width="40" height="40"
           alt="snowflake" className="rounded-circle mr-2" />
           <LeftText />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav-menu">

          <ul className="navbar-nav ml-auto">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Learn
              </a>
              <div className="dropdown-menu bg-secondary dropdown-menu-right dropdown-menu-md-left" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/sports/ski">Skiing</Link>
                <Link className="dropdown-item" to="/sports/snowboard">Snowboarding</Link>
                <Link className="dropdown-item" to="/sports/ice-skate">Ice Skate</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="donateDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donate
              </a>
              <div data-display="static" className="dropdown-menu bg-secondary dropdown-menu-right dropdown-menu-md-left" aria-labelledby="donateDropdown">
                <div className="pl-2"><em>We are not affiliated with any of the following charities.</em></div>

                <div className="dropdown-divider mx-2" style={{ 'borderColor': 'black' }} />

                <Link className="dropdown-item" to="/donate">About Donating</Link>
                <a target="_blank" className="dropdown-item" rel="noreferrer noopener" href="https://protectourwinters.org/">Protect Our Winters</a>
                <a target="_blank" className="dropdown-item" rel="noreferrer noopener" href="https://www.sierraclub.org/">Sierra Club</a>
                <a target="_blank" className="dropdown-item" rel="noreferrer noopener" href="https://www.greenpeace.org/">Greenpeace</a>
                <a target="_blank" className="dropdown-item" rel="noreferrer noopener" href="https://www.worldwildlife.org/">Wold Wildlife Fund</a>
              </div>
            </li>



          </ul>

        </div>




      </nav>
  );

}

export default Nav;
