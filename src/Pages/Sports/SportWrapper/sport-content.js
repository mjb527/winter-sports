import React from 'react';
import Dress from '../../../components/Dress';

const classes = "text-blue-med-no-hov full-height";

function SportContent(props) {

  const sport = props.sport;
  const rawSportData = props.sportData;

  const component = getComponents(rawSportData);

  // const sportData = buildHTML(rawSportData);

  return(
    <div className="mx-3 mb-2">
      <h2 className={classes + " mb-4 mt-2"}><u>Learn To {sport}!</u></h2>
      {component}
    </div>
  );
}

// take the passed array of strings (html)
// and convert it to html
function buildHTML(lines) {

  let built_html = "";
  for(const l of lines) built_html += l;

  return built_html;

}

// we can render different components depending on the state
// if a number, we are getting the Dress component
// otherwise, parse the passed array of strings and build the html
function getComponents(rsd) {
  if(typeof rsd === 'number') return <div className={classes}><Dress className={classes} dress_level={rsd} /></div>;
  else return <div className={classes} dangerouslySetInnerHTML={{__html: buildHTML(rsd) }} />;
}

export default SportContent
