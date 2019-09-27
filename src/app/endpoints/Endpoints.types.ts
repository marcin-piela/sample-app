export type EndpointsProps = {
  items: EndpointsItemProps[] | undefined;
  error?: boolean;
};

export type EndpointsItemProps = {
  id: number;
  name: string;
  tags: string;
  created: string;
  last_updated: string;
  status: {
    id: number;
    description: string;
  };
  service_profile: {
    id: number;
    name: string;
  };
  tariff_profile: {
    id: number;
    name: string;
  };
  sim: {
    id: number;
    iccid: number;
    imsi: number;
    msisdn: number;
  };
  imei: number;
  imei_lock: boolean;
  ip_address: string;
  ip_address_space: {
    id: number;
  };
};
