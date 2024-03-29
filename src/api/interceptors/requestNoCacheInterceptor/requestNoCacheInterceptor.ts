import { Action } from 'api/types';

export const requestNoCacheInterceptor = () => async (action: Action) => {
  if (action.skipAuth) {
    return action;
  }

  return {
    ...action,
    headers: {
      ...action.headers,
      'cache-control': 'no-cache',
    },
  };
};
