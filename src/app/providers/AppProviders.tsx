import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import flatten from 'flat';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from 'theme';
import { LocaleContextController } from 'context/locale';
import { ClientContextController } from 'context/client';
import en from 'locale/en.json';
import { Props } from './AppProviders.types';

const messages = flatten<object, { [key: string]: string }>(en);

export const AppProviders: React.FC<Props> = ({ children }) => (
  <LocaleContextController localeData={{ en: messages }}>
    <ClientContextController>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>{children}</Router>
      </ThemeProvider>
    </ClientContextController>
  </LocaleContextController>
);
