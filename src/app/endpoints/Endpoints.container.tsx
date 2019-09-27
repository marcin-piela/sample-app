import React from 'react';
import { useQuery } from 'react-fetching-library';
import { Redirect } from 'react-router';

import { fetchEndpoints } from 'api/actions/endpoints/fetchEndpoints';
import { Endpoints } from './Endpoints';
import { EndpointsItemProps } from './Endpoints.types';
import { useAuthState } from 'shared/hooks';
import { Layout, Header } from 'shared/components';

export const EndpointsContainer = () => {
  const { payload: endpointsPayload, error: endpointsError, loading } = useQuery<EndpointsItemProps[]>(
    fetchEndpoints(),
  );

  const { isAuthorized } = useAuthState();

  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout header={<Header>Lorem ipsum BITCH</Header>}>
      <Endpoints items={endpointsPayload} error={endpointsError} isLoading={loading} />
    </Layout>
  );
};
