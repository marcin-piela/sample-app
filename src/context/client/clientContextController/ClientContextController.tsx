import React, { useMemo } from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';

import { ClientProviderProps } from './ClientContextController.types';
import {
  requestHostInterceptor,
  requestParamsInterceptor,
  requestNoCacheInterceptor,
  requestAuthInterceptor,
} from 'api/interceptors';
import { useAuthState } from 'shared/hooks';

export const ClientContextController: React.FC<ClientProviderProps> = ({ children }) => {
  const { accessToken } = useAuthState();

  const client = useMemo(() => {
    return createClient({
      requestInterceptors: [
        requestHostInterceptor(String(process.env.REACT_APP_API_URL)),
        requestParamsInterceptor,
        requestAuthInterceptor(accessToken),
        requestNoCacheInterceptor,
      ],
    });
  }, [accessToken]);

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
