import React from 'react';

function ImgAndCaption(props) {
  const { src, alt, caption, imgClass } = props;
  return(
    <div className="col-md-4 col-sm-12">
      <img className={"rounded img-fluid " + imgClass} src={src} alt={alt} />
      <p className="font-x-sm">{caption}</p>
    </div>
  );
}

export default ImgAndCaption;
