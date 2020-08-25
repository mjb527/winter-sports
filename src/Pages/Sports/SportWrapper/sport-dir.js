import React from 'react';
import { Link } from 'react-router-dom';

function SportDir(props) {

  const white = { 'color' : 'white' };
  const { action, sport } = props;

  return(
    <div className="blue text-white h-100">

    <div className="">

    <h4 className="ml-4"><u>Sports</u></h4>
    <ul>
      <li><Link className="pointer" to="/sports/ski"><h6 style={ white }>Ski</h6></Link></li>
      <li><Link className="pointer"to="/sports/snowboard"><h6 style={ white }>Snowboard</h6></Link></li>
      <li><Link className="pointer" to="/sports/ice-skate"><h6 style={ white }>Ice Skate</h6></Link></li>
    </ul>

    <h4 className="mt-2 ml-4"><u>{sport} Topics</u></h4>

    <ul>
      <li className="pointer"><h6 role="button" onClick={() => action('history')}>History</h6></li>
      <li className="pointer"><h6 role="button" onClick={() => action('basics')}>Basics</h6></li>
      <li className="pointer"><h6 role="button" onClick={() => action('dress_level')}>How To Dress</h6></li>
    </ul>
    </div>

    </div>
  );
}

export default SportDir;
