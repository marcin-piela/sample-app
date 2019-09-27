import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppProviders } from 'app/providers/AppProviders';
import { Logout } from './logout/Logout';
import { AppProps } from './App.types';
import { LoginContainer } from './login/LoginContainer';
import { EndpointsContainer } from './endpoints/Endpoints.container';

export const App: React.FC<AppProps> = () => (
  <AppProviders>
    <Switch>
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/endpoints" exact component={EndpointsContainer} />
      <Route path="/logout" exact component={Logout} />
      <Redirect to="/login" />
    </Switch>
  </AppProviders>
);
