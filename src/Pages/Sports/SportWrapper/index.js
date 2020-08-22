import React, { useState, useEffect } from 'react';

import SportContent from './sport-content';
import SportDir from './sport-dir';

function SportWrapper() {

  const [ pageState, setPageState ] = useState({});

  // create a default of 'history'
  useEffect( () => {
    setPageState('history')
  }, []);


  return (
    <div className="row" style={{ "height": "100vh", "overflowY": "scroll" }}>
      <div className="col-3-md col-12-sm"><SportDir changeState={setPageState}/></div>
      <div className="col-9-md col-12-sm"><SportContent page={pageState} /></div>
    </div>

  );
}

export default SportWrapper;
