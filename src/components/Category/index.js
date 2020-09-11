import React from 'react';
import Term from '../Term';

function ImgAndCaption(props) {
  const { name, content } = props;

  const terms = Object.keys(content);

  return(
    <div>
      <h4>- {name}</h4>
      {terms.map( term => <Term name={term} term={content[term]} /> )}
    </div>
  );
}

export default ImgAndCaption;
