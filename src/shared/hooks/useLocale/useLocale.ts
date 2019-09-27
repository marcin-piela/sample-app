import { useContext } from 'react';

import { LocaleContext } from 'context/locale';

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleContextController');
  }

  return context;
};
