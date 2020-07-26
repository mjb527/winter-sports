import React from 'react';
import { Link } from 'react-router-dom';

import LeftText from '../Nav/leftText';

function Footer() {
  return(
    <div>

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

          <li className="nav-item mr-4"><Link className="nav-link" to="/learn">Learn</Link></li>
          <li className="nav-item mr-4"><Link className="nav-link" to="/donate">Donate</Link></li>

        </ul>

      </div>




    </nav>

    </div>
  );

}

export default Footer;
