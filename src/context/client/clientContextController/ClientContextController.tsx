import React, { useMemo } from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';

import { ClientProviderProps } from './ClientContextController.types';
import {
  requestHostInterceptor,
  requestParamsInterceptor,
  requestNoCacheInterceptor,
} from 'api/interceptors';

export const ClientContextController: React.FC<ClientProviderProps> = ({ children }) => {
  const client = useMemo(() => {
    return createClient({
      requestInterceptors: [
        requestHostInterceptor(String(process.env.REACT_APP_API_URL)),
        requestParamsInterceptor,
        requestNoCacheInterceptor,
      ],
    });
  }, []);

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
