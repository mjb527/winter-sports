import React from 'react';
import Category from '../../Category';

// used for oganization and proper styling
function SportTerms(props) {

  const { terms, sources } = props;

  const categories = Object.keys(terms);

  return (
    <div>
      <h3>Good to know terms:</h3>
      {categories.map( category => <Category name={category} content={terms[category]}/>)}

      <div className="my-1">
        <div>Sources:</div>
        { sources.map( source => <a className="text-blue" href={source.href}>{source.title}</a> ) }
      </div>

    </div>
  )
}

export default SportTerms;
