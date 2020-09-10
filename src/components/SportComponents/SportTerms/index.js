import React from 'react';

// used for oganization and proper styling
function SportTerms(props) {
  return (
    <div>
      <h4>Learn how to {props.sport}</h4>
      {props.content}
    </div>
  )
}

export default SportTerms;
