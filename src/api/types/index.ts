import { Action as BaseAction } from 'react-fetching-library';

export type Action = BaseAction<{
  params?: { [key: string]: string | number | undefined | string[] | number[] };
  skipAuth?: boolean;
}>;

export type Token = {
  iat: number;
  exp: number;
};
