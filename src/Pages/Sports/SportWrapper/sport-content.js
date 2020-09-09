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
      <h2 className="mb-4"><u>Learn to {sport}!</u></h2>
      {sportData()}
    </div>
  );
}

export default SportContent
