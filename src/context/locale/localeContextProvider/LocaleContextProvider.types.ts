import { ReactNode } from 'react';

export type LocaleContextProviderProps = {
  locale: string;
  updateLocale: (locale: string) => void;
  children?: ReactNode;
};
