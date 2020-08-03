import React from 'react';
import Media from 'react-media';

function BannerTextLG() {
  return(
    <Media query="(min-width: 550px)" render={() => (
      <div className="position-absolute rounded transparent-dark text-white text-left mx-md-5 mx-sm-1 mb-5 align-self-end">
        <div className="py-2 px-4">
          <h1>Learn to Love the Cold!</h1>
        </div>
        <div className="pb-2 px-4">
          <h4>See amazing views and make better memories!</h4>
          <h4>Learn how to ski, snowboard, ice skate, and so much more!</h4>
        </div>
      </div>
    )} />
  )
}

function BannerTextSM() {
  return(
    <Media query="(max-width: 550px)" render={() => (
      <div className="position-absolute rounded transparent-dark text-white text-left mx-3 w-75">
        <div className="py-1 px-4">
          <h4>Learn to Love the Cold!</h4>
        </div>
        <div className="py-1 px-4">
          <div>See amazing views and make better memories!</div>
          <div>Learn how to ski, snowboard, ice skate, and so much more!</div>
        </div>
      </div>
    )} />
  );
}

export {
  BannerTextLG,
  BannerTextSM
}
