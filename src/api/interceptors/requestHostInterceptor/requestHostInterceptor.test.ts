import { requestHostInterceptor } from './requestHostInterceptor';
import { Action } from 'api/types';

describe('requestHostInterceptor', () => {
  it('returns unchanged action when HOST is already defined in it', async () => {
    const action: Action = {
      endpoint: 'http://example.bar/foo',
      method: 'GET',
    };

    const interceptedAction = await requestHostInterceptor('http://example.com')()(action);

    expect(interceptedAction).toEqual(action);
  });

  it('adds HOST from env variable to all actions', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
    };

    const interceptedAction = await requestHostInterceptor('http://example.com')()(action);

    expect(interceptedAction).toEqual({
      endpoint: 'http://example.com/foo',
      method: 'GET',
    });
  });
});
