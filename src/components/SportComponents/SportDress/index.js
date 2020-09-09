import React from 'react';

function Dress(props) {

  const { dress_level } = props;

  switch (parseInt(dress_level)) {
    case 1:
      return(
        <div>
          <h4>You Can Wear Light Clothing!</h4>
          <div className="my-2">
            Due to the likelihood of little and threat of hypothermia and frostbite, you may want to consider light clothing. This can include a coat or jacket, gloves, and warmer pants. Understanding where you
            are going and what the most likely temperature, wind chill, and weather conditions is of course a greate idea, but there is no need to go over the top with your clothing. If it seems the conditions are
            going to be colder than expected, you may want to consider postponing the activity or wearing warmer clothes.</div>
        </div>
      );

    case 2:
      return(
        <div>
          <h4>Wear Medium Clothing!</h4>
          <div className="my-2">
            Under these conditions, the likelihood of hypothermia and frostbite can be higher. A heavier coat is recommended, and it should be <u>water-resistant or waterproof.</u> This means water will roll off
            instead of setting into your clothes. This includes your jacket, hat, and gloves. You may want to consider snow pants, as these will be waterproof and are generally very warm.
          </div>
          <div className="my-2">
            It is also very important to dress in layers. A sweathshirt and a light, waterproof jacket will likely keep you warmer and drier than one heavier coat. This also makes it easier to control your temperature,
            by adding or removing layers as needed. This can be important in many physical activities in cold weather, as you will warm up when exerting yourself and cool when you are resting.
          </div>
          <div className="my-2">
            During these conditions, hypothermia can set in. This can happen faster when you are wet, so be sure to stay as dry as possible. If you begin to lose feeling in your hands or feet, you are experiencing
            the early stages of hypothermia. You should immediately get somewhere warm and dry.
          </div>
        </div>
      );

    case 3:
      return(
        <div>
          <h4>Wear Heavy Clothing!</h4>
          <div className="my-2">
            Under these conditions, you are very likely to become hypothermic very quickly if you do not dress properly. We recommend wearing <u>at least</u> this much clothing, and please dress in layers.
            Dressing in layers can help you remain warmer, but also strip off some clothing when you are exerting yourself.
          </div>
          <div className="my-2">
            Some things to consider when deciding on a winter coat are the bulk, the material, special features, comfort, and, of course, the style. A lighter coat with good insulation could keep you warmer than a bulky
            down coat, and will very likely give you a better range of motion. However, be sure the coat you wear is rated for the temperatures you are expecting to experience when outside. Special features could
            include extra inside and outside pockets, air vents to help cool you when exerting yourself, a high collar to keep water, ice, snow, and wind off of your neck, and a snow skirt, to help protect your "rear"
            in case of powder and falls. For obvious reasons, the coat should also be comfortable when you wear it and move around and you should like the color and style. It may be good to wear a more unique color than
            blue, black, and gray in case you are with a group. Try to avoid white, as you could blend with your surroundings. Orange, yellow, and other conspicuous colors can be great to be spotted easily.
          </div>
          <div className="my-2">
            Snow pants are a must in these sorts of activities. Personally, I highly recommend pants with suspenders (commonly called "bibs") as they can help keep your pants up in the event of a fall. No one likes a cold, wet butt. You pants should also
            have a band that will squeeze your ankles to keep yourself dry. Other that this, many of the same points listed above for coats will apply here.
          </div>
          <div className="my-2">
            You should also consider using a helmet whenever necessary. With sports such as skiing and snowboarding, a helmet is <u>always</u> necessary. Though they do little to help prevent concusions, they
            can abosolutely keep you from badly injuring yourself, including cracking your skull. Helmets can also keep you very warm, can be different syles and colors, and can hold equipment like cameras to
            capture all of your sweet jumps and other memorable moments!
          </div>
          <div className="my-2">
            It is recommended you wear warm socks that can wick away moisture (wool is generally a good bet) to help keep you warm. It is important to note that thick socks will not always keep you as warm as you would think, and you should ask around for good recommendations as materials and design can affect
            their ability to keep you warm, comfortable, and dry.
          </div>
          <div className="my-2">
            Much like socks, good gloves will be extremely important. Gloves should be absolutely waterproof and allow the needed dexterity. Mittens can be good for some sports where you usually do not need to use
            your fingers, such as snowboarding. Your fingers can be kept warmer in mittens as your fingers will help keep each other warm. Regardless of the type of glove you pick, there should be no space on the hand
            or wrist where skin is exposed. You may wish to tuck your gloves into your coat sleeves to help create a better seal.
          </div>
          <div className="my-2">
            At this point, I may sound like a broken record, but all outside layers of clothing should be waterproof, as you are very likely to get wet. When you are wet, you will become hypothermic more quickly.
            Because of the hazard water can be during the colder months (and even during the Summer!), it is highly recommended you bring extra clothing, such as gloves, socks, and anything else that can most easily
            get wet (gloves, socks, hat, etc.). If you get wet and do not have a replacement for that article of clothing, you should get to a warm, dry place as soon as possible to dry the clothing.
          </div>
        </div>
      )

    default:
      return(
        <div>
          Should not be displayed, for future expansion only!
        </div>
      )

  } // end switch

}

export default Dress;
