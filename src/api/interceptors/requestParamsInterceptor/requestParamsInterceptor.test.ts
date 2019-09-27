import { requestParamsInterceptor } from './requestParamsInterceptor';
import { Action } from 'api/types';

describe('requestParamsInterceptor', () => {
  it('returns unchanged action when params are not defined', async () => {
    const action: Action = {
      endpoint: 'http://example.bar/foo',
      method: 'GET',
    };

    const interceptedAction = await requestParamsInterceptor()(action);

    expect(interceptedAction).toEqual(action);
  });

  it('adds query params to endpoint url', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
      params: {
        search: 'foo',
        page: 1,
        items: [1, 2, 3],
      },
    };

    const interceptedAction = await requestParamsInterceptor()(action);

    expect(interceptedAction).toEqual({
      endpoint: '/foo?search=foo&page=1&items=1,2,3',
      method: 'GET',
    });
  });
});
