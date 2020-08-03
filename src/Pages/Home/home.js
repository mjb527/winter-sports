import React from 'react';
import HomeBanner from './homeBanner';
import HomeContent from './homeContent';

function Home() {
  return(
    <div>
      <HomeBanner />
      <div className="container my-4">
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
