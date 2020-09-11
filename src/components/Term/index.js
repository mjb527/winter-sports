import React from 'react';
import TermImg from './term-img';

function ImgAndCaption(props) {

  const name = props.name

  const { definition, img, readings } = props.term;

  return(
    <div className="ml-4 border-bottom py-2">
      <strong>&#x2744; {name}</strong>
      <div>{definition}</div>
      <TermImg name={name} img={img} />
      { readings.map( reading => <a className="text-blue" href={reading.href}>{reading.title}</a>) }

    </div>
  );
}

export default ImgAndCaption;
