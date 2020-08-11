export const DISPATCH_SIGN_IN = 'DISPATCH_SIGN_IN';
export const DISPATCH_SIGN_IN_SUCCESS = 'DISPATCH_SIGN_IN_SUCCESS';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const DISPATCH_SIGN_IN_FAILED = 'DISPATCH_SIGN_IN_FAILED';
export const DISPATCH_LOGOUT = 'DISPATCH_LOGOUT';
export const DISPATCH_LOGOUT_FAILED = 'DISPATCH_LOGOUT_FAILED';

export const dispatchSignIn = (user, push) => ({
  type: DISPATCH_SIGN_IN,
  user,
  push,
});

export const setUserToken = (userToken) => ({
  type: SET_USER_TOKEN,
  userToken,
});

export const dispatchSignInSuccess = () => ({
  type: DISPATCH_SIGN_IN_SUCCESS,
});

export const dispatchSignInFailed = (err) => ({
  type: DISPATCH_SIGN_IN_FAILED,
  err,
});

export const dispatchLogout = (push) => ({
  type: DISPATCH_LOGOUT,
  push,
});

export const dispatchLogoutFailed = (err) => ({
  type: DISPATCH_LOGOUT_FAILED,
  err,
});
