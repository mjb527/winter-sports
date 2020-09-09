import React from 'react';

// used for oganization and proper styling
function SportEquipment(props) {

  const { equipment } = props;

  return (
    <div className="mb-4">
      <h4>Equipment</h4>
      <div className="row">
        {equipment.map( e => <div className="col-md-6 col-sm-12">&#x2744; {e}</div>)}
      </div>
    </div>
  )
}

export default SportEquipment;
