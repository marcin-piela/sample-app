export const defaultAuthState = {
  isAuthorized: false,
  isAuthorizing: true,
  accessToken: '',
  refreshToken: '',
};

export const loggedAuthState = {
  ...defaultAuthState,
  isAuthorized: true,
  isAuthorizing: false,
};
