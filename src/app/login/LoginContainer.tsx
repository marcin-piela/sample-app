import React from 'react';
import { useMutation } from 'react-fetching-library';

import { createLoginAction } from 'api/actions/auth/authActions';
import { Login } from './Login';

export const LoginContainer: React.FC = () => {
  const { mutate } = useMutation(createLoginAction);

  return <Login onSubmit={mutate} />;
};
