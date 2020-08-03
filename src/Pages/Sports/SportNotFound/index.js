import React from 'react'
import { Link } from 'react-router-dom';

function SportNotFound() {
  return(
      <div className="mt-5">
        <h2 className="mb-2">Sorry, we do not have that sport listed!</h2>
        <h4 className="mb-2">Please choose from the following list:</h4>

        <div className="row d-flex justify-content-center">

          <div className="col-sm-12 col-md-6">
            <ul className="list-group list-group-flush">
              <li><Link className="list-group-item text-blue-med rounded" to="/sports/ski">Ski</Link></li>
              <li><Link className="list-group-item text-blue-med rounded" to="/sports/iceskate">Ice Skate</Link></li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul className="list-group list-group-flush">
              <li><Link className="list-group-item text-blue-med rounded" to="/sports/snowboard">Snowboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img className="img-fluid mb-4 rounded w-100 justify-self-center" src={process.env.PUBLIC_URL + "/imgs/trail-closed.jpg"} alt="trail closed!"/>
        </div>
    </div>
  );
}

export default SportNotFound;
