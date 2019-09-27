import React, { useReducer, useEffect } from 'react';
import cookies from 'js-cookie';
import decode from 'jwt-decode';

import { AuthDispatchContext, AuthStateContext } from '../authContext/AuthContext';
import { authReducer, SET_AUTHORIZED, SET_UNAUTHORIZED } from '../authReducer/authReducer';

import { AuthContextControllerProps } from './AuthContextController.types';
import { Token } from 'api/types';

export const AuthContextController: React.FC<AuthContextControllerProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthorized: false,
    isAuthorizing: true,
    accessToken: String(cookies.get('accessToken')),
    refreshToken: String(cookies.get('refreshToken')),
  });

  useEffect(() => {
    try {
      cookies.set('accessToken', state.accessToken);
      cookies.set('refreshToken', state.refreshToken);

      const decodedToken = decode<Token>(state.accessToken);
      const decodedRefreshToken = decode<Token>(state.refreshToken);
      const expirationTime = decodedToken.exp * 1000;
      const refreshExpirationTime = decodedRefreshToken.exp * 1000;

      if (expirationTime > new Date().getTime() || refreshExpirationTime > new Date().getTime()) {
        return dispatch({
          type: SET_AUTHORIZED,
          decodedToken,
        });
      }

      throw new Error('User is unauthorized');
    } catch (error) {
      return dispatch({
        type: SET_UNAUTHORIZED,
      });
    }
  }, [state.accessToken, state.refreshToken]);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
