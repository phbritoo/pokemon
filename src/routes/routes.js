import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppProvider from '../hooks/index';
import Home from '../containers/pages/home/home';
import Eletrico from '../containers/pages/eletrico/eletrico';
import Agua from '../containers/pages/agua/agua';
import Fogo from '../containers/pages/fogo/fogo';
import Pedra from '../containers/pages/pedra/pedra';

const Routes = () => (
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fogo" exact component={Fogo} />
        <Route path="/pedra" exact component={Pedra} />
        <Route path="/eletrico" exact component={Eletrico} />
        <Route path="/agua" exact component={Agua} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </AppProvider>
);

export default Routes;