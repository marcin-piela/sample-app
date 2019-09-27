import React from 'react';

import { render, act, waitForElement } from 'test';
import { Logout } from './Logout';
import { AuthDispatchContext } from 'context/auth';
import { CLEAR_TOKENS } from 'context/auth/authReducer/authReducer';

describe('Logout component', () => {
  it('renders correctly, dispatches CLEAR_TOKENS and fires logout endpoint', async () => {
    jest.useFakeTimers();
    const dispatch = jest.fn();

    const { container, getByTestId } = render(
      <AuthDispatchContext.Provider value={dispatch}>
        <Logout />
      </AuthDispatchContext.Provider>,
    );

    act(() => {
      jest.runAllTimers();
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: CLEAR_TOKENS,
    });

    await waitForElement(() => getByTestId('redirect-url'));

    expect(container.textContent).toEqual('/login');
  });
});
