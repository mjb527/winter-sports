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
    <ImgAndCaption src="https://www.skitotal.com/wp-content/uploads/2017/09/Screen-Shot-2016-10-28-at-17.23.03.png" alt="Evolution of skiing - skitotal.com" caption="Evolution of skiing, from skitotal.com" />
  </div>

  <p>Modern skis are much shorter than many past skis, as depicted above, while being faster, more controllable, lighter, and easier to maintain. Read more about modern skis in our "Terms" skiing topic.</p>
  <p className="font-x-sm"><a href="https://en.wikipedia.org/wiki/History_of_skiing" className="text-blue">Credit to Wikipedia for information and images</a></p>
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
          'definition': 'Originally a plank of wood strapped to the feet, skis were used primarily for travel over ice and deep snow for much of their history. Today, they are made of a variety of materials, including wood, fiberglass, aluminum, and steel. Unlike in years passed, they are mainly used for recreation today.',
          'img': null,
          /*
            readings should include href, title of reading:
             >> readings: [{href: '', title: ''}]
          */
          'readings': null
        },
        'Ski Boots': {
          'definition': 'Warm, tall boots that strap into ski bindings. Better boots are more responsive and allow better feel and control. Ski boots will be tight, and will likely hurt a bit when you first are getting used to them.',
          'img': null,
          'readings': null
        },
        'Bindings': {
          'definition': 'Bindings allow you to snap into your skis with ski boots. They need to be properly installed and adjusted. It is recommended you bring your skis and boots to a professional to install them and adjust them to your boots, or you could lose the ski in the event of a fall or even a turn. Bindings also have brakes, which pop down when the boot is off. When you put the boot on, this brake will pop up as to not affect your ability to ski.',
          'img': null,
          'readings': null
        },
        'Ski Poles': {
          'definition': 'Generally made of aluminum, poles can help you move around and "plant" yourself for sharper turns. They are not necessary and many skiiers opt not to use them. For certain sports, like ski jumping, they are a bad idea as it can become a hazard. For other ski sports, such as cross-country skiing, they are absolutely necessary. Downhill skiiers can choose to use them or not, however.',
          'img': null,
          'readings': null
        },
        'Helmet': {
          'definition': 'Do we need to define "helmet"? Maybe we should tell you why you should wear one instead. While a helmet may not prevent a concussion, as a concussion is from your brain bouncing against your skull, it can help lessen the risk of one and can certainly keep you from severly damaging your head in the event of a crash or hard fall. They are padded and insulated, come in a variety of colors, and can be customized with stickers :) . While some skiiers, especially veteran skiiers, opt out of using a helmet and wear a warm hat instead, we highly recommend you wear one!',
          'img': null,
          'readings': null
        }
      },
      'Parts of the Ski': {

      }
    }
  return(
    <SportTerms terms={terms} />
  )
}

export { History, Learn, Dress, Terms };
