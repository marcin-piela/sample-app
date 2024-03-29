import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import flatten from 'flat';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from 'theme';
import { LocaleContextController } from 'context/locale';
import { ClientContextController } from 'context/client';
import { AuthContextController } from 'context/auth';
import en from 'locale/en.json';
import { Props } from './AppProviders.types';

const messages = flatten<object, { [key: string]: string }>(en);

export const AppProviders: React.FC<Props> = ({ children }) => (
  <LocaleContextController localeData={{ en: messages }}>
    <AuthContextController>
      <ClientContextController>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router basename="/">{children}</Router>
        </ThemeProvider>
      </ClientContextController>
    </AuthContextController>
  </LocaleContextController>
);
