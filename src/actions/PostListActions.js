export const GET_POST_LIST = 'GET_POST_LIST';
export const SET_POST_LIST = 'SET_POST_LIST';
export const SET_POST_LIST_SUCCESS = 'SET_POST_LIST_SUCCESS';
export const SET_POST_LIST_FAILED = 'SET_POST_LIST_FAILED';
export const DISPATCH_SIGN_IN = 'DISPATCH_SIGN_IN';
export const DISPATCH_SIGN_IN_SUCCESS = 'DISPATCH_SIGN_IN_SUCCESS';
export const DISPATCH_SIGN_IN_FAILED = 'DISPATCH_SIGN_IN_FAILED';
export const DISPATCH_LOGOUT = 'DISPATCH_LOGOUT';
export const DISPATCH_LOGOUT_FAILED = 'DISPATCH_LOGOUT_FAILED';

export const getPostList = () => ({
  type: GET_POST_LIST,
});

export const setPostList = (postListData) => ({
  type: SET_POST_LIST,
  postListData,
});

export const setPostListSuccess = () => ({
  type: SET_POST_LIST_SUCCESS,
});

export const setPostListFailed = (err) => ({
  type: SET_POST_LIST,
  err,
});

export const dispatchSignIn = (user, push) => ({
  type: DISPATCH_SIGN_IN,
  user,
  push,
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
