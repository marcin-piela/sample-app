import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

<<<<<<< HEAD
import { AppProviders } from 'app/providers/AppProviders';
import { Endpoints } from './endpoints/Endpoints';
import { Logout } from './logout/Logout';
import { AppProps } from './App.types';
import { LoginContainer } from './login/LoginContainer';
=======
import { AppProviders } from "app/providers/AppProviders";
import { Login } from "./login/Login";
import { EndpointsContainer } from "./endpoints/Endpoints.container";
import { Logout } from "./logout/Logout";
import { AppProps } from "./App.types";
>>>>>>> eb77c71... [US-463] Add table component with data fetching from API

export const App: React.FC<AppProps> = () => (
  <AppProviders>
    <Switch>
<<<<<<< HEAD
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/endpoints" exact component={Endpoints} />
=======
      <Route path="/login" exact component={Login} />
      <Route path="/endpoints" exact component={EndpointsContainer} />
>>>>>>> eb77c71... [US-463] Add table component with data fetching from API
      <Route path="/logout" exact component={Logout} />
      <Redirect to="/login" />
    </Switch>
  </AppProviders>
);
