import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SportContent from './sport-content';
import SportDir from './sport-dir';
import { sports as SportsData } from "../sports.json";


function SportWrapper() {

  const [ pageState, setPageState ] = useState( 'history' );

  let { sport } = useParams();
  const sport_data = SportsData[sport];
  sport = sport[0].toUpperCase() + sport.substring(1);

  function handler(newPageState) {
    setPageState(newPageState);
  }

  // create a default of 'history'
  useEffect( () => {
    setPageState( 'history' );
  }, []);

  // largely useless but can prevent premature renders
  if(pageState !== {})
    return (
      <div className="row" style={{ "minHeight": "100vh", "overflowY": "scroll" }}>
        <div className="col-md-3 col-sm-12"><SportDir sport={sport} action={handler}/></div>
        <div className="col-md-9 col-sm-12"><SportContent sport={sport} sportData={sport_data[pageState]} /></div>
      </div>

    );
}

export default SportWrapper;
