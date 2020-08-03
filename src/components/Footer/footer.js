import React from 'react';
import { Link } from 'react-router-dom';

import LeftText from '../LeftText/leftText';

function Footer() {
  return(
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <a className="navbar-brand d-inline-flex" href="/">
        <img src="/imgs/snowflake.png" width="40" height="40"
         alt="snowflake" className="rounded-circle mr-2" />
         <LeftText />
      </a>

        <ul className="ml-auto d-inline-flex">

          <li className="nav-item mr-4"><Link className="nav-link text-blue" to="/learn">Learn</Link></li>
          <li className="nav-item mr-4"><Link className="nav-link text-blue" to="/donate">Donate</Link></li>

        </ul>

    </nav>

    </div>
  );

}

export default Footer;
