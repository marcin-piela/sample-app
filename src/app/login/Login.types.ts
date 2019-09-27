import { QueryResponse } from 'react-fetching-library';

import { LoginFormBody } from './loginForm/LoginForm.types';

export type LoginProps = {
  onSubmit: (values: LoginFormBody) => Promise<QueryResponse>;
};
