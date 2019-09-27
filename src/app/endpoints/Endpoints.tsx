import React from 'react';

import { EndpointsProps } from './Endpoints.types';
import { Layout, Header } from 'shared/components';

export const Endpoints: React.FC<EndpointsProps> = () => {
  return <Layout header={<Header>Lorem ipsum BITCH</Header>}>Endpoints</Layout>;
};
