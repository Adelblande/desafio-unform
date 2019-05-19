import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Crud from './pages/crud';
import Create from './components/create';
import Update from './components/update';
import Delete from './components/delete';
// import { Container } from './styles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Crud} />
      <Route path="/create" component={Create} />
      <Route path="/update" component={Update} />
      <Route path="/delete" component={Delete} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
