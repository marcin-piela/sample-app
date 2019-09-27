import { requestAuthInterceptor } from './requestAuthInterceptor';
import { Action } from 'api/types';

describe('requestAuthInterceptor', () => {
  it('skips authorization header when skipAuth property is true', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
      skipAuth: true,
    };

    const interceptedAction = await requestAuthInterceptor('token')()(action);

    expect(interceptedAction).toEqual(action);
  });

  it('adds authorization header to all actions without skipAuth property', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
    };

    const interceptedAction = await requestAuthInterceptor('token')()(action);

    expect(interceptedAction).toEqual({
      endpoint: '/foo',
      method: 'GET',
      headers: {
        'Authorization': `Bearer token`,
      },
    });
  });
});
