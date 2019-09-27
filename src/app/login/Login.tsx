import React from 'react';
import { Redirect } from 'react-router-dom';
import sha1 from 'crypto-js/sha1';

import { LoginProps } from './Login.types';
import useStyles from './Login.styles';
import { useAuthState, useAuthDispatch } from 'shared/hooks';
import { LoginFormBody } from './loginForm/LoginForm.types';
import { SET_TOKENS } from 'context/auth/authReducer/authReducer';
import { LoginForm } from './loginForm/LoginForm';
import logo from 'assets/images/logo.png';

export const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const classes = useStyles();
  const { isAuthorized } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleSubmit = async (body: LoginFormBody) => {
    const { payload, error } = await onSubmit({
      username: body.username,
      password: sha1(body.password).toString(),
    });

    if (!error && payload) {
      return dispatch({
        type: SET_TOKENS,
        accessToken: payload.auth_token,
        refreshToken: payload.refresh_token,
      });
    }

    if (payload && payload.error_token) {
      return {
        id: `error.${payload.error_token}`,
      };
    }

    return {
      id: 'error.badCredentials',
    };
  };

  if (isAuthorized) {
    return <Redirect to="/endpoints" />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.leftSide} />
      <div className={classes.rightSide}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <div className={classes.formWrapper}>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
