import { Action } from 'api/types';

export const createLoginAction: (body: { username: string; password: string }) => Action = body => ({
  skipAuth: true,
  endpoint: 'authenticate',
  method: 'POST',
  body,
});
