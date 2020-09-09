import React from 'react';

const classes = "text-blue-med-no-hov full-height";

function SportContent(props) {

  console.log("content");
  console.log(props);

  const { sport, sportData } = props;
  console.log(sportData);
// TODO: add color to my h3
  return(
    <div>
      <h3 className="">Learn to {sport}!</h3>
      {sportData()}
    </div>
  );
}

export default SportContent
