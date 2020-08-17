import React, { Component } from 'react';

import { loadSingleBeer } from './../services/beers';

import HomeLink from './../components/HomeLink';

class SingleBeerView extends Component {
  constructor() {
    super();
    this.state = {
      beer: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    loadSingleBeer(id).then((data) => {
      console.log('this is the data', data);
      this.setState({
        isLoaded: true,
        beer: data,
      });
    });
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <HomeLink />
        {this.state.isLoaded && (
          <>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>
              <strong>Description: </strong>
              {beer.description}
            </p>
            <p>{beer.contributed_by}</p>
          </>
        )}
      </div>
    );
  }
}

export default SingleBeerView;
