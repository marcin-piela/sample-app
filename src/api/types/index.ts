import { Action as BaseAction } from 'react-fetching-library';

export type Action = BaseAction<{
  skipAuth: boolean;
  params?: { [key: string]: string | number | undefined | string[] | number[] };
}>;
