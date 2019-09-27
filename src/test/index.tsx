import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MessageDescriptor } from 'react-intl';

import { LocaleContext } from 'context/locale';
import { TestingRouter } from './testingRouter/TestingRouter';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Options = RenderOptions & {
  initialRoute?: string;
};

const localeContext = {
  formatMessage: ({ id }: MessageDescriptor) => id,
  locale: 'en',
  updateLocale: (locale: string) => null,
};

const customRender = (node: ReactElement, options?: Omit<Options, 'queries'>) => {
  return render(
    <LocaleContext.Provider value={{ ...localeContext }}>
      <TestingRouter initialRoute={options ? options.initialRoute : ''}>{node}</TestingRouter>
    </LocaleContext.Provider>,
    options,
  );
};

export * from '@testing-library/react';
export { renderHook, act as hookAct } from '@testing-library/react-hooks';
export { customRender as render };
export { TestingRouter } from './testingRouter/TestingRouter';

