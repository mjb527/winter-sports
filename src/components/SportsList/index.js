import React from 'react';
import { Link } from 'react-router-dom';

function SportsList() {
  return(
    <div>
      <div className="d-flex justify-content-center">
        <h4 className="my-2">Learn a Sport!</h4>
      </div>


        <div className="">
          <ul className="list-group list-group-flush">
            <li><Link className="list-group-item text-blue-med rounded text-center border-bottom" to="/sports/ski">Ski</Link></li>
            <li><Link className="list-group-item text-blue-med rounded text-center border-bottom" to="/sports/iceskate">Ice Skate</Link></li>
            <li><Link className="list-group-item text-blue-med rounded text-center" to="/sports/snowboard">Snowboard</Link></li>
          </ul>
        </div>

    </div>
  )
}

export default SportsList;
