import React, { ReactNode } from 'react';

import { renderHook } from 'test';
import { useAuthState } from './useAuthState';
import { AuthStateContext } from 'context/auth';

describe('useAuthState test', () => {
  const authState = {
    isAuthorized: true,
    isAuthorizing: false,
    accessToken: '',
    refreshToken: '',
  };

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <AuthStateContext.Provider value={authState}>{children}</AuthStateContext.Provider>
  );

  it('returns authState context', async () => {
    const { result } = renderHook(() => useAuthState(), {
      wrapper,
    });

    expect(result.current).toEqual(authState);
  });

  it('throws error when useAuthState is not used within AuthContextController', async () => {
    const { result } = renderHook(() => useAuthState());

    expect(result.error).toEqual(Error('useAuthState must be used within an AuthContextController'));
  });
});
