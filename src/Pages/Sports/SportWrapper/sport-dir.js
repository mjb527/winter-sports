import React from 'react';
import { Link } from 'react-router-dom';

function SportDir(props) {

  const handleClick = props.changeState;

  const white = { 'color' : 'white' }

  return(
    <div className="blue text-white h-100">

    <div className="px-5">

    <h4 className="pt-5"><u>Sports</u></h4>
    <ul>
      <li className=""><Link to="/sports/ski"><h6 style={ white }>Ski</h6></Link></li>
      <li className=""><Link to="/sports/snowboard"><h6 style={ white }>Snowboard</h6></Link></li>
      <li className=""><Link to="/sports/ice-skate"><h6 style={ white }>Ice Skate</h6></Link></li>
    </ul>

    <h4 className="mt-2"><u>Topics</u></h4>

    <ul>
      <li><a onClick={handleClick('history')}><h6>History</h6></a></li>
      <li><a onClick={handleClick('basics')}><h6>Basics</h6></a></li>
      <li><a onClick={handleClick('dress')}><h6>How To Dress</h6></a></li>
    </ul>
    </div>

    </div>
  );
}

export default SportDir;
