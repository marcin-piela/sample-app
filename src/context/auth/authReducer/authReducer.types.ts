import { Token } from 'api/types';

export type Action = {
  type: string;
  decodedToken?: Token;
  accessToken?: string;
  refreshToken?: string;
};
