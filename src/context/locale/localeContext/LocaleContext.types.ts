import { MessageDescriptor } from 'react-intl';

export type LocaleContextType = {
  formatMessage: (messageDescriptor: MessageDescriptor, values?: { [key: string]: string }) => string;
  locale: string;
  updateLocale: (locale: string) => void;
};
