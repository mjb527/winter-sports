import React from 'react';

function TermImg(props) {
  const { img, name } = props;
  if(img) return <img src={img} alt={name + " example"} />;
  else return null;
}

export default TermImg;
