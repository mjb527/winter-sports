import React from 'react';
import SportsList from '../../components/SportsList';


function Learn() {


  return(
    <div style={{ 'minHeight': '85vh' }} className="">
      <div className="d-flex justify-content-center align-items-center">
        <h5 className="text-center w-75 my-4">We're excited you want to learn about a winter sport! Please pick one from the list below.
        Our list is always growing, so please be sure to check back occassionally to see if anything else grabs your attention!</h5>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <SportsList />
        </div>
      </div>
    </div>

  );
}

export default Learn;
