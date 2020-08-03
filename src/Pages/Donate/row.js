import React from 'react';

function OrgRow(props) {

  const { id, name, description, url, image_url } = props;

  return(

    <div id={"org_" + id} className="row py-4 align-items-center" style={{ "borderTop": "1px solid black" }}>

      <div className="col-md-4 col-sm-12">
        <img src={image_url} alt={ name + " logo" } style={{ "width": "100%" }}/>
      </div>

      <div className="col-md-8 col-sm-12">
        <h5><a className="text-blue-med" href={url}>{name}</a></h5>
        <div>{description}</div>
      </div>

    </div>

  );

}

export default OrgRow;
