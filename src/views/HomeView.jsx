import React from 'react';

import HomeSection from './../components/HomeSections';

const HomeView = () => {
  return (
    <div>
      <HomeSection
        className="HomeSection"
        title="All Beers"
        img="./bar-counter.jpg"
        route="/beers"
      />
      <HomeSection
        className="HomeSection"
        title="Random Beer"
        img="./draft-beer.jpg"
        route="/random-beer"
      />
      <HomeSection
        className="HomeSection"
        title="New Beer"
        img="./beer.jpg"
        route="/new-beer"
      />
    </div>
  );
};

export default HomeView;
