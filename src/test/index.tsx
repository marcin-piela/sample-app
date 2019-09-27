import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MessageDescriptor } from 'react-intl';

import { LocaleContext } from 'context/locale';
import { AuthStateContext, AuthDispatchContext } from 'context/auth';
import { TestingRouter } from './testingRouter/TestingRouter';
import { AuthStateContextType } from 'context/auth/authContext/AuthContext.types';
import { loggedAuthState } from './mocks/authStateMocks';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Options = RenderOptions & {
  authState?: AuthStateContextType;
  initialRoute?: string;
};

const localeContext = {
  formatMessage: ({ id }: MessageDescriptor) => id,
  locale: 'en',
  updateLocale: () => null,
};

const customRender = (node: ReactElement, options?: Omit<Options, 'queries'>) => {
  return render(
    <LocaleContext.Provider value={{ ...localeContext }}>
      <AuthStateContext.Provider value={options && options.authState ? options.authState : loggedAuthState}>
        <AuthDispatchContext.Provider value={jest.fn()}>
          <TestingRouter initialRoute={options ? options.initialRoute : ''}>{node}</TestingRouter>
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    </LocaleContext.Provider>,
    options,
  );
};

export * from '@testing-library/react';
export { renderHook, act as hookAct } from '@testing-library/react-hooks';
export { customRender as render };
export { TestingRouter } from './testingRouter/TestingRouter';
