import React from 'react';
import { useParams } from 'react-router-dom';

import SportWrapper from '../SportWrapper';

import SportNotFound from '../SportNotFound';

function Sport() {

  const { sport } = useParams();

  const allowedSports=['ski', 'snowboard', 'iceskate'];

  if(allowedSports.indexOf(sport) !== -1) {
    return (
      <div style={{ "minHeight": "90vh", "overflowX": "hidden"}}>
        <SportWrapper />
      </div>
    );
  }
  else {
    return (
      <div style={{ "minHeight": "90vh", "overflowX": "hidden"}} className="d-flex align-items-start justify-content-center container pt-5">
        <SportNotFound />
      </div>
    );
  }
}

export default Sport;
