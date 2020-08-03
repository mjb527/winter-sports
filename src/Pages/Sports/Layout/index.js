import React from 'react';
import { useParams } from 'react-router-dom';

import SportWrapper from '../SportWrapper';

import SportNotFound from '../../PageNotFound';

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
        <SportNotFound />
    );
  }
}

export default Sport;
