import React from 'react';

// used for oganization and proper styling
function SportTerms(props) {
  return (
    <div>
      <h4>props.sport} - Good to know terms</h4>
      {props.content}
    </div>
  )
}

export default SportTerms;
