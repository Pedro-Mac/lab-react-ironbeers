import React, { Component } from 'react';

import HomeLink from './../components/HomeLink';

import { Link } from 'react-router-dom';

import { loadBeers } from './../services/beers';

class ListOfBeersView extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    loadBeers().then((data) => {
      console.log('data in mount', data);
      this.setState({
        beers: data,
        isLoaded: true,
      });
    });
  }

  render() {
    const beers = this.state.beers;
    return (
      <div>
        <HomeLink />
        {beers.map((item) => (
          <>
            <Link to={`/beers/${item._id}`} key={item._id}>
              <img src={item.image_url} alt={item.name} />
              <div>
                <h5>{item.name}</h5>

                <p>{item.tagline}</p>
                <p>{item.contributed_by}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    );
  }
}

export default ListOfBeersView;
