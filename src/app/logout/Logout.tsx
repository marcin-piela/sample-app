import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuthDispatch } from 'shared/hooks';
import { CLEAR_TOKENS } from 'context/auth/authReducer/authReducer';

export const Logout: React.FC<{}> = () => {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    dispatch({
      type: CLEAR_TOKENS,
    });
  }, [dispatch]);

  return <Redirect to="/login" />;
};
