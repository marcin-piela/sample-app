import React from 'react';

import { render, fireEvent, act } from 'test';
import { Login } from './Login';
import { AuthDispatchContext, AuthStateContext } from 'context/auth';
import { SET_TOKENS } from 'context/auth/authReducer/authReducer';
import { loggedAuthState, defaultAuthState } from 'test/mocks/authStateMocks';

describe('Login component', () => {
  it('allows to submit login form with valid data', async () => {
    const dispatch = jest.fn();

    const onSubmit = jest.fn(async () => ({
      error: false,
      payload: { auth_token: 'accessToken', refresh_token: 'refreshToken' },
    }));

    const { getByLabelText, getByRole } = render(
      <AuthDispatchContext.Provider value={dispatch}>
        <Login onSubmit={onSubmit} />
      </AuthDispatchContext.Provider>,
      {
        authState: defaultAuthState,
      }
    );

    act(() => {
      fireEvent.change(getByLabelText('login.email'), { target: { value: 'test@example.com' } });
      fireEvent.change(getByLabelText('login.password'), { target: { value: 'test' } });
    });

    await act(async () => {
      await fireEvent.click(getByRole('button'));
    });

    expect(onSubmit).toHaveBeenCalledWith({
      username: 'test@example.com',
      password: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
    });

    expect(dispatch).toBeCalledWith({
      type: SET_TOKENS,
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    });
  });

  it('redirects to main page when user is authorized', async () => {
    const onSubmit = jest.fn();

    const { container } = render(
      <AuthStateContext.Provider value={loggedAuthState}>
        <Login onSubmit={onSubmit} />
      </AuthStateContext.Provider>,
      {
        authState: loggedAuthState,
      },
    );

    expect(container.textContent).toEqual('/endpoints');
  });

  it('shows validation error from API', async () => {
    const onSubmit = jest.fn(async () => ({
      error: true,
      payload: {
        error_token: 'wrongEmailOrPassword'
      },
    }));

    const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={onSubmit} />, {
      authState: defaultAuthState,
    });

    act(() => {
      fireEvent.change(getByLabelText('login.email'), { target: { value: 'test@example.com' } });
      fireEvent.change(getByLabelText('login.password'), { target: { value: 'test' } });
    });

    await act(async () => {
      await fireEvent.click(getByRole('button'));
    });

    expect(getByText('error.wrongEmailOrPassword')).toBeTruthy();
  });
});
