import React, { Component } from 'react';

import { loadRandomBeer } from './../services/beers';

import HomeLink from './../components/HomeLink';

class RandomBeerView extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      randomBeer: null,
    };
  }

  componentDidMount() {
    loadRandomBeer().then((data) => {
      console.log(data);
      this.setState({
        isLoaded: true,
        randomBeer: data,
      });
    });
  }

  render() {
    const { randomBeer } = this.state;
    return (
      <div>
        <HomeLink />
        {this.state.isLoaded && (
          <>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>Attenuation: {randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
          </>
        )}
      </div>
    );
  }
}

export default RandomBeerView;
