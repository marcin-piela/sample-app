import React from 'react';

import { render, act } from 'test';
import { LocaleContext } from 'context/locale';
import { LocaleContextType } from 'context/locale/localeContext/LocaleContext.types';
import { LocaleContextController } from './LocaleContextController';

const localesData = {
  en: {
    key1: 'value1',
    key2: 'value2',
  },
  pl: {
    key1: 'wartosc1',
    key2: 'wartosc2',
  },
};

describe('LocaleContextController component', () => {
  it('sets context with default locale as en', async () => {
    const onContext = jest.fn(() => <div />);

    render(
      <LocaleContextController localeData={localesData}>
        <LocaleContext.Consumer>{onContext}</LocaleContext.Consumer>
      </LocaleContextController>,
    );

    expect(onContext).toHaveBeenCalledWith(expect.objectContaining({ locale: 'en' }));
  });

  it('sets context with passed locale', async () => {
    const onContext = jest.fn(() => <div />);

    render(
      <LocaleContextController localeData={localesData} locale="pl">
        <LocaleContext.Consumer>{onContext}</LocaleContext.Consumer>
      </LocaleContextController>,
    );

    expect(onContext).toHaveBeenCalledWith(expect.objectContaining({ locale: 'pl' }));
  });

  it('passes updated locale on updateLocale call', async () => {
    let contextProps: LocaleContextType;
    const onContext = jest.fn(props => {
      contextProps = props;

      return <div />;
    });

    render(
      <LocaleContextController localeData={localesData} locale="pl">
        <LocaleContext.Consumer>{onContext}</LocaleContext.Consumer>
      </LocaleContextController>,
    );

    act(() => {
      contextProps.updateLocale('en');
    });

    expect(onContext).toBeCalledTimes(2);
    expect(onContext).toHaveBeenNthCalledWith(1, expect.objectContaining({ locale: 'pl' }));
    expect(onContext).toHaveBeenNthCalledWith(2, expect.objectContaining({ locale: 'en' }));
  });
});
