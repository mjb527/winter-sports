import React from 'react';

function ImgAndCaption(props) {

  const name = props.name

  const { definition, img, readings } = props.term;

  return(
    <div className="ml-4">
      <strong>{name}</strong>
      <p>{definition}</p>
      { () => { if(img) return <img src={img} alt={name + " example"} /> }}
      { () => { if(readings) readings.map( reading => {
          return <a href={reading.href}>{reading.title}</a>
        })
      }}
    </div>
  );
}

export default ImgAndCaption;
