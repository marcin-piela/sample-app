import React from 'react';

import { Layout } from './Layout';
import { render } from 'test';

it('renders children correctly', () => {
  const { queryByText } = render(<Layout>Children</Layout>);

  expect(queryByText('Children')).toBeTruthy();
});

it('renders with header correclty', () => {
  const { queryByText } = render(<Layout header={<div>Test Header</div>}>Children</Layout>);

  expect(queryByText('Test Header')).toBeTruthy();
});
