import React from 'react';

function Dress(props) {

  switch (props.dress_level) {
    case 1:
      return(
        <div>
          <h4>Light Clothing</h4>
          <div>
            Due to the likelihood of little and threat of hypothermia and frostbite, you may want to consider light clothing. This can include a coat or jacket, gloves, and warmer pants. Understanding where you
            are going and what the most likely temperature, wind chill, and weather conditions is of course a greate idea, but there is no need to go over the top with your clothing. If it seems the conditions are
            going to be colder than expected, you may want to consider postponing the activity or wearing warmer clothes.</div>
        </div>
      );

    case 2:
      return(
        <div>
          <h4>Medium Clothing</h4>
          <div>
            Under these conditions, the likelihood of hypothermia and frostbite can be higher. A heavier coat is recommended, and it should be <u>water-resistant or waterproof.</u> This means water will roll off
            instead of setting into your clothes. This includes your jacket, hat, and gloves. You may want to consider snow pants, as these will be waterproof and are generally very warm.
          </div>
          <div>
            It is also very important to dress in layers. A sweathshirt and a light, waterproof jacket will likely keep you warmer and drier than one heavier coat. This also makes it easier to control your temperature,
            by adding or removing layers as needed. This can be important in many physical activities in cold weather, as you will warm up when exerting yourself and cool when you are resting.
          </div>
          <div>
            During these conditions, hypothermia can set in. This can happen faster when you are wet, so be sure to stay as dry as possible. If you begin to lose feeling in your hands or feet, you are experiencing
            the early stages of hypothermia. You should immediately get somewhere warm and dry.
          </div>
        </div>
      );

    case 3:
      return(
        <div>
          <h4>Heavy Clothing</h4>
          <div></div>
        </div>
      );

    default:
      return(
        <div>
          Should not be displayed, for future expansion only!
        </div>
      )

  } // end switch

}

export default Dress;
