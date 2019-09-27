import { Action } from 'api/types';

export const requestHostInterceptor = (host: string) => () => async (action: Action) => {
  if (action.endpoint.startsWith('http')) {
    return action;
  }

  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};
