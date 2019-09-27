import React, { ReactNode } from 'react';

import { renderHook } from 'test';
import { useLocale } from './useLocale';
import { LocaleContext } from 'context/locale';

describe('useLocale test', () => {
  const localeContext = {
    locale: 'en',
    updateLocale: jest.fn(),
    formatMessage: jest.fn(),
  };

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <LocaleContext.Provider value={localeContext}>{children}</LocaleContext.Provider>
  );

  it('returns localeContext', async () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper,
    });

    expect(result.current).toEqual(localeContext);
  });

  it('throws error when useLocale is not used within LocaleContextController', async () => {
    const { result } = renderHook(() => useLocale());

    expect(result.error).toEqual(Error('useLocale must be used within a LocaleContextController'));
  });
});
