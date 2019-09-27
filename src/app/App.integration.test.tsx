import React from 'react';

import { App } from './App';
import { render } from 'test';

it('renders login page by default', () => {
  const { getByText } = render(<App />);

  expect(getByText('Login')).toBeTruthy();
});
