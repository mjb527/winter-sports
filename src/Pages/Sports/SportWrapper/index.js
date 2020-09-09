import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SportContent from './sport-content';
import SportDir from './sport-dir';

function SportWrapper() {

  // set state with default as history
  const [ pageState, setPageState ] = useState( 'History' );

  // get the sport from the url
  let { sport } = useParams();

  // get the appropriate component based on the sport param
  const SportComponent = getSportComponent(sport);
  console.log(SportComponent.History);

  // adjust sport to be Capitalized
  sport = sport[0].toUpperCase() + sport.substring(1);

  // handle clicks in our 'directory'
  function handler(newPageState) {
    setPageState(newPageState);
  }

  // create a default of 'history'
  useEffect( () => {
    setPageState( 'History' );
  }, []);

  // largely useless but can prevent premature renders
  if(pageState)
    // return components
    return (
      <div className="row" style={{ "minHeight": "100vh", "overflowY": "scroll" }}>
        <div className="col-md-3 col-sm-12"><SportDir sport={sport} action={handler}/></div>
        <div className="col-md-9 col-sm-12"><SportContent sport={sport} sportData={SportComponent[pageState]} /></div>
      </div>

    );
}

function getSportComponent(mySport) {
  switch (mySport) {
    case mySport = 'ski':
      return require('../../../components/Sports/ski');
    case mySport = 'snowboard':
      return require('../../../components/Sports/snowboard');
    case mySport = 'iceskate':
      return require('../../../components/Sports/iceskate');
    default:
      return null;

  }
}

export default SportWrapper;
