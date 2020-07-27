import React from 'react';

function OrgRow(props) {

  const { id, name, description, url, image_url } = props;

  return(

    <div id={"org_" + id} className="row py-4 align-items-center" style={{ "borderTop": "1px solid black" }}>

      <div className="col-4">
        <img src={image_url} alt={ name + " logo" } style={{ "width": "100%" }}/>
      </div>

      <div className="col-8">
        <a href={url}><h5>{name}</h5></a>
        <div>{description}</div>
      </div>

    </div>

  );

}

export default OrgRow;
