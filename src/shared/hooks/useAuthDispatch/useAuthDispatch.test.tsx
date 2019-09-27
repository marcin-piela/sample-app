import React, { ReactNode } from 'react';

import { renderHook } from 'test';
import { useAuthDispatch } from './useAuthDispatch';
import { AuthDispatchContext } from 'context/auth';

describe('useAuthDispatch test', () => {
  const dispatch = jest.fn();

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
  );

  it('returns authStateContext value', async () => {
    const { result } = renderHook(() => useAuthDispatch(), {
      wrapper,
    });

    expect(result.current).toEqual(dispatch);
  });

  it('throws error when useAuthDispatch is not used within AuthContextController', async () => {
    const { result } = renderHook(() => useAuthDispatch());

    expect(result.error).toEqual(Error('useAuthDispatch must be used within an AuthContextController'));
  });
});
