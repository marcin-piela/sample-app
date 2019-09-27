import { createContext } from 'react';

import { LocaleContextType } from './LocaleContext.types';

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);
