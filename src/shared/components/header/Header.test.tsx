import React from 'react';

import { Header } from './Header';
import { render } from 'test';

it('renders correctly', () => {
  const { queryByText } = render(<Header>Title</Header>);

  expect(queryByText('Title')).toBeTruthy();
});
