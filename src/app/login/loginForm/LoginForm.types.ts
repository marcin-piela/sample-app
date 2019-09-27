import { QueryResponse } from 'react-fetching-library';

export type LoginFormBody = {
  username: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: (values: LoginFormBody) => Promise<QueryResponse | void | { id: string }>;
};
