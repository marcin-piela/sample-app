import { ReactNode } from 'react';

export type LocaleContextControllerProps = {
  localeData: { [key: string]: { [key: string]: string } };
  locale?: string;
  children?: ReactNode;
};
