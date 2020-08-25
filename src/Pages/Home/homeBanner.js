import React from 'react';
import { BannerTextLG, BannerTextSM, BannerTextXS } from './bannerText';

function HomeBanner() {

//  <div className="w-100 p-absolute">
// </div>


  return(
    <div>

      <div className="d-flex justify-content-center align-items-center">
        <img src="/imgs/banner.png " alt="Winter view" className="img-fluid w-100"/>
        <BannerTextLG />
        <BannerTextSM />
        <BannerTextXS />

      </div>


    </div>
  );

}

export default HomeBanner;
