import React from 'react';

import HomeLink from './../components/HomeLink';

const NewBeerView = () => {
  return (
    <div>
      <HomeLink />
      <form
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <label htmlFor="name">Name</label>
        <input name="name" type="text" id="name" />

        <label htmlFor="tagline">Tagline</label>
        <input name="tagline" type="text" id="tagline" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>

        <label htmlFor="First brewed">First brewed</label>
        <input name="first_brewed" type="text" id="First brewed" />

        <label htmlFor="brewer-tips">Brewer Tips</label>
        <input name="brewers_tips" type="text" id="brewer-tips" />

        <label htmlFor="attenuation">Attenutation level</label>
        <input name="attenuation_level" type="number" id="attenuation" />

        <label htmlFor="contributed-by">Contributed by</label>
        <input name="contributed_by" type="text" id="contributed-by" />

        <button>Add beer</button>
      </form>
    </div>
  );
};

export default NewBeerView;
