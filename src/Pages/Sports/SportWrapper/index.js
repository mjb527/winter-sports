import React from 'react';

import SportContent from './sport-content';
import SportDir from './sport-dir';

function SportWrapper() {
  return (
    <div className="row" style={{ "height": "100vh", "overflowY": "scroll" }}>
      <div className="col-3"><SportDir /></div>
      <div className="col-9"><SportContent /></div>
    </div>

  );
}

export default SportWrapper;
