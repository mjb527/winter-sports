import React from 'react';

import { Organizations } from './orgs';
import Anchor from './anchor';
import OrgRow from './row';

function Donate() {
  return(
    <div className="container my-4">

      <div className="mb-4">
        <h4>Please consider donating to one of the organizations below to help protect our planet.</h4>
        <em>We are unaffiliated with all of the following charities. No one will ever reach out to you
        from our site asking for donations or payment of any kind.</em>

        <div className="row px-4">
          {Organizations.map( org => <Anchor id={org.id} name={org.name} url={ "#org_" + org.id} />)}
        </div>
      </div>
      {Organizations.map( org => <OrgRow {...org} />)}

    </div>
  );
}

export default Donate;
