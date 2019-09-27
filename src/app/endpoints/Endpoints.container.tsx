import { fetchEndpoints } from "../../api/actions/endpoints/fetchEndpoints";
import React from "react";
import { useQuery } from "react-fetching-library";

import { Endpoints } from "./Endpoints";
import { EndpointsItemProps } from "./Endpoints.types";

export const EndpointsContainer = () => {
  const { payload: endpointsPayload, error: endpointsError } = useQuery<
    EndpointsItemProps[]
  >(fetchEndpoints());

  return <Endpoints items={endpointsPayload} error={endpointsError} />;
};
