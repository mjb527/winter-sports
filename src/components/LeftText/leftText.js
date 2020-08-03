import React from 'react';
import Media from 'react-media';

function LeftText() {
  // return the components only if the screen is at least 550px
  return(
    <Media query="(min-width: 550px)" render={() => (
      <div>

        <div className="nav-item d-inline text-blue">
          Learn to Love the Cold!
        </div>

      </div>
    )} />

  );
}

export default LeftText;
