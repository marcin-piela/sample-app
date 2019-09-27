import { Action } from 'api/types';

export const requestAuthInterceptor = (accessToken: string) => () => async (action: Action) => {
  if (action.skipAuth) {
    return action;
  }

  return {
    ...action,
    headers: {
      ...action.headers,
      'Authorization': `Bearer ${accessToken}`,
    },
  };
};
