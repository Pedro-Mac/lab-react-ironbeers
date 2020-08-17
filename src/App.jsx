import React from 'react';

import './App.css';
import HomeView from './views/HomeView';
import ListOfBeersView from './views/ListOfBeersView';
import RadndomBeerView from './views/RandomBeerView';
import SingleBeerView from './views/SingleBeerView';
import NewBeerView from './views/NewBeerView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/beers" component={ListOfBeersView} exact />
          <Route path="/beers/:id" component={SingleBeerView} exact />
          <Route path="/random-beer" component={RadndomBeerView} exact />
          <Route path="/new-beer" component={NewBeerView} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
