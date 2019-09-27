import {
  authReducer,
  SET_AUTHORIZED,
  SET_TOKENS,
  START_AUTHORIZING,
  SET_UNAUTHORIZED,
  CLEAR_TOKENS,
} from './authReducer';

describe('Auth reducer', () => {
  const defaultState = {
    isAuthorized: false,
    isAuthorizing: true,
    accessToken: '',
    refreshToken: '',
  };

  it('throws exception when action is invalid', async () => {
    expect(() => authReducer(defaultState, { type: 'foo' })).toThrowError();
    expect(() => authReducer(defaultState, { type: SET_TOKENS })).toThrowError();
    expect(() => authReducer(defaultState, { type: SET_AUTHORIZED })).toThrowError();
  });

  it('sets isAuthorizing flag as true', async () => {
    expect(
      authReducer(defaultState, {
        type: START_AUTHORIZING,
      }),
    ).toEqual({
      ...defaultState,
      isAuthorizing: true,
    });
  });

  it('sets user as unauthorized', async () => {
    expect(
      authReducer(defaultState, {
        type: SET_UNAUTHORIZED,
      }),
    ).toEqual({
      ...defaultState,
      isAuthorizing: false,
      isAuthorized: false,
    });
  });

  it('sets user as authorized', async () => {
    expect(
      authReducer(defaultState, {
        type: SET_AUTHORIZED,
        decodedToken: {
          iat: 1,
          exp: 1,
        },
      }),
    ).toEqual({
      ...defaultState,
      isAuthorizing: false,
      isAuthorized: true,
    });
  });

  it('sets current tokens', async () => {
    expect(
      authReducer(defaultState, {
        type: SET_TOKENS,
        accessToken: 'token',
        refreshToken: 'token',
      }),
    ).toEqual({
      ...defaultState,
      accessToken: 'token',
      refreshToken: 'token',
    });
  });

  it('clears current tokens', async () => {
    expect(
      authReducer(
        {
          ...defaultState,
          accessToken: 'token',
          refreshToken: 'token',
        },
        {
          type: CLEAR_TOKENS,
          accessToken: 'token',
          refreshToken: 'token',
        },
      ),
    ).toEqual({
      ...defaultState,
      accessToken: '',
      refreshToken: '',
    });
  });
});
