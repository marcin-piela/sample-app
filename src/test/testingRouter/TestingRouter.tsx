import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import { TestingRouterProps } from './TestingRouter.types';

export const TestingRouter: React.FC<TestingRouterProps> = ({ children, initialRoute }) => (
  <MemoryRouter initialEntries={[initialRoute || '/component']} initialIndex={0}>
    <Route>
      <Switch>
        <Route path={initialRoute || '/component'} render={() => children} />
        <Route path="/" render={({ location }) => <div data-testid="redirect-url">{location.pathname}</div>} />
      </Switch>
    </Route>
  </MemoryRouter>
);
