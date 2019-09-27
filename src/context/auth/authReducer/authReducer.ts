import { Action } from './authReducer.types';
import { AuthStateContextType } from 'context/auth/authContext/AuthContext.types';

export const SET_AUTHORIZED = 'auth/set-authorized';
export const SET_UNAUTHORIZED = 'auth/set-unauthorized';
export const SET_TOKENS = 'auth/set-tokens';
export const CLEAR_TOKENS = 'auth/clear-tokens';
export const START_AUTHORIZING = 'auth/start-authorizing';

export const authReducer: (state: AuthStateContextType, action: Action) => AuthStateContextType = (state, action) => {
  switch (action.type) {
    case START_AUTHORIZING:
      return {
        ...state,
        isAuthorizing: true,
      };
    case SET_AUTHORIZED:
      if (!action.decodedToken) {
        throw new Error('Missing decodedToken object in authReducer');
      }

      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: true,
      };
    case SET_UNAUTHORIZED:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: false,
      };
    case CLEAR_TOKENS:
      return {
        ...state,
        accessToken: '',
        refreshToken: '',
      };
    case SET_TOKENS:
      if (!action.accessToken || !action.refreshToken) {
        throw new Error('Missing token in authReducer');
      }

      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
