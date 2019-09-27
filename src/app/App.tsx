import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppProviders } from 'app/providers/AppProviders';
import { Login } from './login/Login';
import { Endpoints } from './endpoints/Endpoints';
import { Logout } from './logout/Logout';
import { AppProps } from './App.types';

export const App: React.FC<AppProps> = () => (
  <AppProviders>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/endpoints" exact component={Endpoints} />
      <Route path="/logout" exact component={Logout} />
      <Redirect to="/login" />
    </Switch>
  </AppProviders>
);
