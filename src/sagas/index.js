import { all } from 'redux-saga/effects';
import { watchForSignInSaga, watchForLogoutSaga } from './authSagas';
import {
  watchForFetchPostListData,
  watchForToggleOpenModalSaga,
} from './postListSagas';

export default function* rootSaga() {
  yield all([
    watchForFetchPostListData(),
    watchForSignInSaga(),
    watchForLogoutSaga(),
    watchForToggleOpenModalSaga(),
  ]);
}
