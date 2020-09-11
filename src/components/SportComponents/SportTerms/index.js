import React from 'react';
import Category from '../../Category';

// used for oganization and proper styling
function SportTerms(props) {

  const { terms } = props;

  const categories = Object.keys(terms);

  return (
    <div>
      <h3>Good to know terms:</h3>
      {categories.map( category => <Category name={category} content={terms[category]}/>)}

    </div>
  )
}

export default SportTerms;
