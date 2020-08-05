// acts as the 404 page, will route them here when the url is not found

import React from 'react'
import { Link } from 'react-router-dom';
import Media from 'react-media';

function SportNotFound() {
  return(
    <div className="container" style={{ "minHeight": "100vh", "overflowX": "hidden" }}>
      <div className="mt-5">
        <h1 className="mb-2">Uh-oh! Looks like that trail is closed!</h1>

        <Media query="(min-width: 500px) and (max-width: 799px)" render={() => (
          <aside className="float-right mr-2">
            <div className="pl-4">
                <img className="rounded ml-4" src={process.env.PUBLIC_URL + "/imgs/trail-closed.jpg"} alt="trail closed!"/>
            </div>
          </aside>
        )} />

        <Media query="(min-width: 800px)" render={() => (
          <aside className="float-right mr-5 mb-5">
            <div className="pl-4">
                <img className="rounded" src={process.env.PUBLIC_URL + "/imgs/trail-closed.jpg"} alt="trail closed!"/>
            </div>
          </aside>
        )} />


        <h2 className="mb-2">Check out one of these trails instead!</h2>

        <h4 className="mb-2">Explor the Site!</h4>

        <div className="col-12 p-0">
          <ul className="list-group list-group-flush">
            <li><Link className="list-group-item text-blue-med rounded" to="/">Home</Link></li>
            <li><Link className="list-group-item text-blue-med rounded" to="/donate">Donate</Link></li>
          </ul>
        </div>

        <h4 className="mb-2"><u>Learn a Sport!</u></h4>

        <div className="row d-flex justify-content-center">

          <div className="col-sm-12 col-md-6 p-md-0">
            <ul className="list-group list-group-flush">
              <li><Link className="list-group-item text-blue-med rounded" to="/sports/ski">Ski</Link></li>
              <li><Link className="list-group-item text-blue-med rounded" to="/sports/iceskate">Ice Skate</Link></li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6 p-md-0">
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
