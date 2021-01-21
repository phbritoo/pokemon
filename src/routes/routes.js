import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppProvider from '../hooks/index';
import Home from '../containers/pages/homeType/homeType';
import HomePokemon from '../containers/pages/homePokemon/homePokemon';

const Routes = () => (
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agua" exact component={HomePokemon} />
        <Route path="/fogo" exact component={HomePokemon} />
        <Route path="/pedra" exact component={HomePokemon} />
        <Route path="/eletrico" exact component={HomePokemon} /> 
        <Route path="/planta" exact component={HomePokemon} />
        <Route path="/lutador" exact component={HomePokemon} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </AppProvider>
);

export default Routes;