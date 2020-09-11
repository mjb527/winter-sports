import React from 'react';
import SportHistory from '../SportComponents/SportHistory';
import SportLearn from '../SportComponents/SportLearn';
import SportEquipment from '../SportComponents/SportEquipment';
import SportDress from '../SportComponents/SportDress';
import SportTerms from '../SportComponents/SportTerms';
import ImgAndCaption from '../ImgAndCaption';

function History() {

  const content = <div>
  <p>Skiing was invented independently all around the world by several ancient cultures, including Eastern Russia, Southern Mongolia, and modern-day North-East China. Cultures across the globe have skiied for thousands of years, with ski fragments dating as far back as 6300 BCE in Russia. However there is debate as to when people first began to ski. Modern skiing has its origins in ancient Scandanavia, where the Norse people used it as a form of travel. In fact, the word "ski" comes from old Norse word for "stick of wood". Skis were used to help save energy during times of heavy snowfall, when travel could be exhausting.</p>


  <p>Skiing as a recreational activity is much more modern than its utilitarian origins. Modern skiing dates back to 1767, with the Danish, Norweigan, and Swedish militaries using them. During the 19th century, the sport had evolved from purely military, to a competition sport. Noteworthy dates are the first ski jumper, Olaf Rye, in 1809; the first North American ski club, called the Nansen Ski Club, in 1872; and 1884, when the first purely cross-country skiing event occured in Trondheim, Norway.</p>

  <div className="row text-center d-flex justify-content-center">
    <ImgAndCaption src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Ullr.jpg" alt="Böksta Runestone depicting Ullr" caption="Runestone from Böksta, Sweden, depicting Ullr, the Norse god of skiing." imgClass="sports-img" />
    <ImgAndCaption src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Goldi_hunter_on_skis_on_ice%2C_holding_long_spear_LCCN2004708051.tif/lossy-page1-491px-Goldi_hunter_on_skis_on_ice%2C_holding_long_spear_LCCN2004708051.tif.jpg" alt="Nanai hunter with asymmetrical skis" caption="Nanai hunter with asymmetrical skis." imgClass="sports-img"/>
    <ImgAndCaption src="https://upload.wikimedia.org/wikipedia/commons/7/71/Gr%C3%A5kallbakken_Trondheim_Wilse_06293.jpg" alt="Trondheim ski jumpingm 1907" caption="Trondheim ski jumping 1907." imgClass="sports-img"/>

  </div>

  <p>Skis themselves have also evolved over the years. Skis have been asymmetrical for a majority of their history, with one ski covered in animal fat to act as a type of wax, bearing the bruntof the skiier's weight, while the other is shorter, usually wrapped in anmimal fur, and used to push off. Skis have been up to 4 meters (over 13 feet) long as well, used by seal hunters across ice so they would not fall through cracks. </p>

  <div className="row text-center d-flex justify-content-center">
    <ImgAndCaption src="https://www.skitotal.com/wp-content/uploads/2017/09/Screen-Shot-2016-10-28-at-17.23.03.png" alt="Evolution of skiing - skitotal.com" caption="Evolution of skiing, credit to skitotal.com" />
  </div>

  <p>Modern skis are much shorter than many past skis, as depicted above, while being faster, more controllable, lighter, and easier to maintain. Read more about modern skis in our "Terms" skiing topic.</p>
  <p className="font-sm"><a href="https://en.wikipedia.org/wiki/History_of_skiing" className="text-blue">Credit to Wikipedia for information and images</a></p>
  </div>

  return(
    <SportHistory content={content} />
  )

}

function Learn() {
  const content = <div>How to ski coming soon!</div>;
  return(
    <SportLearn content={content} sport="Ski"/>
  );
}

function Dress() {
  const equipment = [
    "Skis",
    "Ski Boots and Bindings",
    "Helmet (optional, but highly recommended)",
    "Ski poles (optional)"
  ];
  return (
      <div>
        <SportEquipment equipment={equipment} />
        <SportDress dress_level="3" />
      </div>
  )
}

function Terms() {
  const terms = {
    'Equipment' : {
        'Skis': {
          'definition': 'Originally a plank of wood strapped to the feet, skis were used primarily for travel over ice and deep snow for much of their history. Today, they are made of a variety of materials, including wood, fiberglass, aluminum, and steel. Unlike in years passed, they are mainly used for recreation today. Skis vary in width, length, material, colors, and style for benefits in differnt terrain and activities. Downhill skis can be built for all-mountin skiing, powder skiing, and groomer skiing. Other variations include alpine skiing, cross country, jumping skis, and ski blades, meant for heavy terrain park use.',
          'img': null, // img source url
          'readings': [{'href': 'http://www.mechanicsofsport.com/skiing/equipment/skis.html', 'title': 'General overview of ski parts, thank you mechanicsofsport.com'}]
        },
        'Ski Boots': {
          'definition': 'Warm, tall boots that strap into ski bindings. Better boots are more responsive and allow better feel and control. Ski boots will be tight, and will likely hurt a bit when you first are getting used to them.',
          'img': null,
          'readings': []
        },
        'Bindings': {
          'definition': 'Bindings allow you to snap into your skis with ski boots. They need to be properly installed and adjusted. It is recommended you bring your skis and boots to a professional to install them and adjust them to your boots, or you could lose the ski in the event of a fall or even a turn. Bindings also have brakes, which pop down when the boot is off. When you put the boot on, this brake will pop up as to not affect your ability to ski.',
          'img': null,
          'readings': []
        },
        'Ski Poles': {
          'definition': 'Generally made of aluminum, poles can help you move around and "plant" yourself for sharper turns. They are not necessary and many skiiers opt not to use them. For certain sports, like ski jumping, they are a bad idea as it can become a hazard. For other ski sports, such as cross-country skiing, they are absolutely necessary. Downhill skiiers can choose to use them or not, however.',
          'img': null,
          'readings': []
        },
        'Helmet': {
          'definition': 'Do we need to define "helmet"? Maybe we should tell you why you should wear one instead. While a helmet may not prevent a concussion, as a concussion is from your brain bouncing against your skull, it can help lessen the risk of one and can certainly keep you from severly damaging your head in the event of a crash or hard fall. They are padded and insulated, come in a variety of colors, and can be customized with stickers :) . While some skiiers, especially veteran skiiers, opt out of using a helmet and wear a warm hat instead, we highly recommend you wear one!',
          'img': null,
          'readings': []
        }
      },
      'Parts of your Ski': {
        'Tip': {
          'definition': 'The front of the ski. Raised to help you float above the snow. This will be just as wide or wider than the majority of the rest of the ski.',
          'img': null,
          'readings': []
        },
        'Tail': {
          'definition': 'The back of the ski. This may be raised to help you float in deeper snow or may be flat to increase the surface area of the ski, allowing for higher speed and better manueverability. May be just as wide or wider than the majority of the rest of the ski.',
          'img': null,
          'readings': []
        },
        'Waist': {
          'definition': 'The middle of the ski. Generally, this will often be the skinniest part of the ski. Your boots will often rest here, and it will be cambered, to allow a bit of "pop" when you ski, which allows a better distribution of weight.',
          'img': null,
          'readings': []
        },
        'Edge': {
          'definition': 'Exactly what it sounds like. The edge is ofter steel, and its quality may affect your ability to carve in snow. It is recommended skis have their edges sharpened at the end of the season, and during the season as needed.',
          'img': null,
          'readings': []
        },
        'Deck': {
          'definition': 'The top of the ski; what you will see while skiing. Damage to this should be repaired as soon as possible, as any moisture that leaks into the ski could mean the end of the ski.',
          'img': null,
          'readings': []
        },
        'Base': {
          'definition': 'The bottom of the ski; what comes in contact with the snow. Damage here should be repaired as soon as possible, as any scratches or rust may affect your ability to control the ski properly and will affect the speed at which you can move. It is also recommended to wax the base with ski wax (and ski wax only!) when needed and at the end of the season. Wax will improve the ski\'s ability to slide on snow, and will increase your speed.',
          'img': null,
          'readings': []
        },
        'Side-Cut Radius': {
          'definition': 'The angle at which the waist is curved. A smaller radius means a smaller turning radius, and vice-versa. The radius will vary greatly depending on the make, model, and style of ski (meaning what the ski is designed for). One side-cut radius is not necessarily better than another, and you should try to find a ski you are comfortable with and meets the style of skiing you are hoping for.',
          'img': null,
          'readings': []
        },
        'Camber': {
          'definition': 'The vertical shape of the ski. This will peak beneath your boots and provide a bit of "pop" and better distribution of weight across the ski. This will vary depending on the ski make, model, and style of ski.',
          'img': null,
          'readings': []
        }
      }
    }
  return(
    <SportTerms terms={terms} sources={ [{"title": "mechanicsofsport.com", "href": "http://www.mechanicsofsport.com/skiing/equipment/skis.html"}] } />
  )
}

function Ettiquite() {
  return null;
}

export { History, Learn, Dress, Terms, Ettiquite };
