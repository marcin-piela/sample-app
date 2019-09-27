import React from 'react';

import { App } from './App';
import { render } from 'test';

it('renders login page by default', () => {
  const { queryByText } = render(<App />);

  expect(queryByText('Login page')).toBeTruthy();
});
