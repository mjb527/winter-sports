import React from 'react';
import '../sportcomponents.css';

// used for oganization and proper styling
function SportHistory(props) {
  return (
    <div>
    <h4>History</h4>
      {props.content}
    </div>
  )
}

export default SportHistory;
