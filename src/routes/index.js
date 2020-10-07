import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PokemonInfo from '../pages/PokemonInfo';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokemons/:pokemon+" component={PokemonInfo} />
  </Switch>
);

export default Routes;
