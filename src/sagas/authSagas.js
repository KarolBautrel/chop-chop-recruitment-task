import { put, takeEvery, call, delay } from 'redux-saga/effects';
import { httpPost } from 'services/APICallService';
import { removeAuthToken } from 'services/sessionServices';

import {
  DISPATCH_SIGN_IN,
  DISPATCH_LOGOUT,
  dispatchSignInSuccess,
  dispatchLogoutFailed,
  dispatchSignInFailed,
} from 'actions/AuthActions';

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

    sessionStorage.setItem('token', token);

    yield put(dispatchSignInSuccess());
  } catch (err) {
    yield put(dispatchSignInFailed(err));
  }
}

export function* logoutSaga({ push }) {
  try {
    yield call(removeAuthToken);
    yield call(push, '/login');
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
