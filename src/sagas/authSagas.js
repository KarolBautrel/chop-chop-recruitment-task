import { put, takeEvery, call } from 'redux-saga/effects';
import { httpPost } from 'services/APICallService';
import { removeAuthToken } from 'services/sessionServices';

import {
  DISPATCH_SIGN_IN,
  DISPATCH_LOGOUT,
  dispatchSignInSuccess,
  dispatchLogoutFailed,
  dispatchSignInFailed,
} from 'actions/PostListActions';

export function* signInSaga({ user, push }) {
  try {
    const apiPath = 'auth';
    const config = {
      username: user.login,
      password: user.password,
    };

    const {
      data: { token },
    } = yield call(httpPost, apiPath, config);

    yield put(dispatchSignInSuccess());

    sessionStorage.setItem('token', token);

    push('/gateway');
  } catch (err) {
    yield put(dispatchSignInFailed(err));
  }
}

export function* logoutSaga({ push }) {
  try {
    yield call(removeAuthToken);
    yield call(push, '/');
  } catch (err) {
    yield put(dispatchLogoutFailed(err));
  }
}

export function* watchForSignInSaga() {
  yield takeEvery(DISPATCH_SIGN_IN, signInSaga);
}

export function* watchForLogoutSaga() {
  yield takeEvery(DISPATCH_LOGOUT, logoutSaga);
}
