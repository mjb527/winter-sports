import React from 'react'
import { Link } from 'react-router-dom';

function SportNotFound() {



  return(
    <div className="container" style={{ "minHeight": "100vh", "overflowX": "hidden" }}>
      <div className="mt-5">
        <h1 className="mb-2">Uh-oh! Looks like that trail is closed!</h1>
        <aside className="float-right">
          <img className="rounded" src={process.env.PUBLIC_URL + "/imgs/trail-closed.jpg"} alt="trail closed!"/>
        </aside>
        <h2 className="mb-2">Check out one of these trails instead!</h2>
        <h4 className="mb-2"><u>Learn a Sport!</u></h4>

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
      </div>
    </div>
  );
}

export default SportNotFound;
