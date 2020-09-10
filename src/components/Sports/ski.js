import React from 'react';
import SportHistory from '../SportComponents/SportHistory';
import SportLearn from '../SportComponents/SportLearn';
import SportEquipment from '../SportComponents/SportEquipment';
import SportDress from '../SportComponents/SportDress';
import SportTerms from '../SportComponents/SportTerms';

function History() {

  const content = <div>
  <p>Skiing was invented independently all around the world by several ancient cultures, including Eastern Russia, Southern Mongolia, and modern-day North-East China. Cultures across the globe have skiied for thousands of years, with ski fragments dating as far back as 6300 BCE in Russia. However there is debate as to when people first began to ski. Modern skiing has its origins in ancient Scandanavia, where the Norse people used it as a form of travel. In fact, the word \"ski\" comes from old Norse word for "stick of wood". Skis were used to help save energy during times of heavy snowfall, when travel could be exhausting.</p>
  <p>Skiing as a recreational activity is much more modern than its utilitarian origins. Modern skiing dates back to 1767, with the Danish, Norweigan, and Swedish militaries using them. During the 19th century, the sport had evolved from purely military, to a competition sport. Noteworthy dates are the first ski jumper, Olaf Rye, in 1809; the first North American ski club, called the Nansen Ski Club, in 1872; and 1884, when the first purely cross-country skiing event occured in Trondheim, Norway. </p>
  <p>Skis themselves have also evolved over the years. Skis have been asymmetrical for a majority of their history, with one ski covered in animal fat to act as a type of wax, bearing the bruntof the skiier's weight, while the other is shorter, usually wrapped in anmimal fur, and used to push off. Skis have been up to 4 meters (over 13 feet) long as well, used by seal hunters across ice so they would not fall through cracks. </p>
  <p>Modern skis are much shorter, while being faster, more controllable, lighter, and easier to maintain. Read more in our "Terms" skiing topic.</p>
  <p className="source"><a href="https://en.wikipedia.org/wiki/History_of_skiing">Source</a></p>
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
  const content = <div></div>
  return(
    <SportTerms content={content} />
  )
}

export { History, Learn, Dress, Terms };
