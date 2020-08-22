// acts as the 404 page, will route them here when the url is not found

import React from 'react'
import { Link } from 'react-router-dom';
// import Media from 'react-media';

function SportNotFound() {
  return(
    <div className="my-5 container d-flex justify-content-center" style={{ "minHeight": "100vh", "overflowX": "hidden" }}>
      <div className="text-center">
        <h1 className="mb-4 justify-self-center">Uh-oh! That trail is closed, you can't go that way!</h1>
        <img className="rounded img-fluid justify-self-center" src={process.env.PUBLIC_URL + "/imgs/ski-area-boundary-sign.jpg"} alt="trail closed!"/>
        <div className="d-flex justify-content-center">
          <h2 className="mb-2 mt-4">Check out one of these trails instead!</h2>
        </div>

        <div className="d-flex justify-content-center">
          <h4 className="mb-2">Explore the Site!</h4>
        </div>

        <div className="mb-2">
          <ul className="list-group list-group-flush">
            <li><Link className="list-group-item text-blue-med rounded text-center border-bottom" to="/">Home</Link></li>
            <li><Link className="list-group-item text-blue-med rounded text-center" to="/donate">Donate</Link></li>
          </ul>
        </div>

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
      </div>
  );
}

export default SportNotFound;
