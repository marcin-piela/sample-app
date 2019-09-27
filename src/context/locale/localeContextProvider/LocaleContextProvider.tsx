import React from 'react';
import { useIntl } from 'react-intl';

import { LocaleContext } from 'context/locale';
import { LocaleContextProviderProps } from './LocaleContextProvider.types';

export const LocaleContextProvider: React.FC<LocaleContextProviderProps> = ({ children, ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <LocaleContext.Provider
      value={{
        formatMessage,
        ...props,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
