import React from 'react';
import cookies from 'js-cookie';

import { AuthStateContext } from '../authContext/AuthContext';

import { render } from 'test';
import { AuthContextController } from './AuthContextController';

const mockToken = {
  firstName: 'Admin',
  lastName: 'Admin',
  iat: 999999999999,
  exp: 999999999999,
};

jest.mock('jwt-decode', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((token: string) => (token === 'bad' ? { ...mockToken, exp: 0 } : mockToken)),
}));

describe('AuthContextController component', () => {
  it('decodes token and sets user as unauthorized when token expired', () => {
    const children = jest.fn();

    cookies.get = jest
      .fn()
      .mockImplementationOnce(() => 'bad')
      .mockImplementationOnce(() => 'bad');

    render(
      <AuthContextController>
        <AuthStateContext.Consumer>{children}</AuthStateContext.Consumer>
      </AuthContextController>,
    );

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        isAuthorized: false,
        isAuthorizing: true,
      }),
    );

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        accessToken: 'bad',
        refreshToken: 'bad',
        isAuthorized: false,
        isAuthorizing: false,
      }),
    );
  });

  it('decodes token and returns proper user data', () => {
    const children = jest.fn();

    cookies.get = jest
      .fn()
      .mockImplementationOnce(() => 'token')
      .mockImplementationOnce(() => 'refreshToken');

    render(
      <AuthContextController>
        <AuthStateContext.Consumer>{children}</AuthStateContext.Consumer>
      </AuthContextController>,
    );

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        isAuthorized: false,
        isAuthorizing: true,
      }),
    );

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        accessToken: 'token',
        refreshToken: 'refreshToken',
        isAuthorized: true,
        isAuthorizing: false,
      }),
    );
  });
});
