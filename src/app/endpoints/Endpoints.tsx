import React from 'react';

import { EndpointsProps } from './Endpoints.types';
import { Layout, Header } from 'shared/components';
import { useLocale } from 'shared/hooks';

export const Endpoints: React.FC<EndpointsProps> = () => {
  const { formatMessage } = useLocale();

  return <Layout header={<Header>{formatMessage({ id: 'endpoints.title' })}</Header>}>
    Endpoints
  </Layout>;
};
