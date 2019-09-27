import React from 'react';

import { render } from 'test';
import { Input } from './Input';

describe('Input component', () => {
  const inputProp = {
    name: 'test',
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    value: '',
  };

  const metaProp = {
    error: false,
    touched: false,
  };

  it('renders as text input', () => {
    const { getByLabelText } = render(
      <Input input={{ ...inputProp, value: 'Random Text' }} meta={metaProp} label="username" />,
    );

    const input = getByLabelText('username') as HTMLInputElement;

    expect(input.value).toBe('Random Text');
  });

  it('renders as password type input', () => {
    const { getByLabelText } = render(<Input input={inputProp} meta={metaProp} type="password" label="username" />);

    const input = getByLabelText('username') as HTMLInputElement;

    expect(input.type).toBe('password');
  });

  it('renders error', () => {
    const { container, getByText } = render(
      <Input input={{ ...inputProp, value: 'test', name: 'username' }} meta={{ error: 'test', touched: true }} label="username" />,
    );

    expect(getByText('test')).toBeTruthy();
  });
});

