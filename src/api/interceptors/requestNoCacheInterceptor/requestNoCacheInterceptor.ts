import { Action } from 'api/types';

export const requestNoCacheInterceptor = () => async (action: Action) => {
  if (action.skipAuth) {
    return action;
  }

  return {
    ...action,
    headers: {
      ...action.headers,
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
  };
};
