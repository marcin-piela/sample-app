import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LocaleContextControllerProps } from './LocaleContextController.types';

import { LocaleContextProvider } from '..';

export const LocaleContextController: React.FC<LocaleContextControllerProps> = ({
  children,
  localeData,
  locale: localeProp,
}) => {
  const [locale, updateLocale] = useState(localeProp || 'en');
  const messages = localeData[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <LocaleContextProvider locale={locale} updateLocale={updateLocale}>
        {children}
      </LocaleContextProvider>
    </IntlProvider>
  );
};
