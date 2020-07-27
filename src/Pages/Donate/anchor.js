import React from 'react';

function Anchor(props) {

  const { id, name, url } = props;

  return(
    <div className="col-4 p-2 ">
      <a key={id} href={url}>{name}</a>
    </div>
  );

}

export default Anchor;
