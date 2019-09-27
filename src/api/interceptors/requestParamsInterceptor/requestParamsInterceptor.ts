import { Action } from 'api/types';

export const requestParamsInterceptor = () => async (action: Action) => {
  if (!action.params) {
    return action;
  }

  const queryParams = Object.entries(action.params)
    .filter(([val]) => val !== undefined)
    .map(([key, val]) => (Array.isArray(val) ? `${key}=${val.join(',')}` : `${key}=${val}`))
    .join('&');

  return {
    ...action,
    endpoint: `${action.endpoint}?${queryParams}`,
    params: undefined,
  };
};
