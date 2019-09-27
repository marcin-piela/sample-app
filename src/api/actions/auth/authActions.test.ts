import { createLoginAction } from './authActions';

describe('Auth actions', () => {
  it('creates login action', () => {
    const loginAction = createLoginAction({ username: 'text@example.com', password: 'test' });

    expect(loginAction.endpoint).toEqual('authenticate');
    expect(loginAction.body).toEqual({ username: 'text@example.com', password: 'test' });
  });
});
