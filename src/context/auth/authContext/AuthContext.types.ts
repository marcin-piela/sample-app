import { Dispatch } from 'react';

import { Action } from '../authReducer/authReducer.types';

export type AuthStateContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  accessToken: string;
  refreshToken: string;
};

export type AuthDispatchContextType = Dispatch<Action>;
