import { requestNoCacheInterceptor } from './requestNoCacheInterceptor';
import { Action } from 'api/types';

describe('requestNoCacheInterceptor', () => {
  it('adds no-cache headers to requests', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
    };

    const interceptedAction = await requestNoCacheInterceptor()(action);

    expect(interceptedAction).toEqual({
      endpoint: '/foo',
      method: 'GET',
      headers: {
        pragma: 'no-cache',
        'cache-control': 'no-cache',
      },
    });
  });
});
