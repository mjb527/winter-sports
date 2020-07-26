import React from 'react';
import { Link } from 'react-router-dom';
import LeftText from './leftText';

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
              <div className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/sports/ski">Skiing</Link>
                <Link className="dropdown-item" to="/sports/snowboard">Snowboarding</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="donateDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donate
              </a>
              <div className="dropdown-menu bg-secondary" aria-labelledby="donateDropdown">
                <em>We are unaffiliated with any of the following charities</em>
                <li className="dropdown-item"><Link className="dropdown-item" to="/donate">Donate</Link></li>
                <li className="dropdown-item"><a className="nav-link" href="https://protectourwinters.org/">Protect Our Winters</a></li>
                <li className="dropdown-item"><a className="nav-link" href="https://www.sierraclub.org/">Sierra Club</a></li>
                <li className="dropdown-item"><a className="nav-link" href="https://www.greenpeace.org/">Greenpeace</a></li>
                <li className="dropdown-item"><a className="nav-link" href="https://www.worldwildlife.org/">Wold Wildlife Fund</a></li>
              </div>
            </li>

          </ul>

        </div>




      </nav>
  );

}

export default Nav;
