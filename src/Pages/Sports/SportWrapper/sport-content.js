import React from 'react';
import { useParams } from "react-router-dom";
import { sports as SportsData } from "../sports.json";

function SportContent(props) {

  const { sport } = useParams();
  const sport_data = SportsData[sport];

  const { page } = props;

  return(
    <div className="blue full-height">

      { sport_data[page] }

    </div>
  );
}

export default SportContent
