import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Crud from './pages/crud';
import Create from './components/create';
import Edit from './components/edit';
import Delete from './components/delete';
// import { Container } from './styles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Crud} />
      <Route path="/create" component={Create} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/delete/:id" component={Delete} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
