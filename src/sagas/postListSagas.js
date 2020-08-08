import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_POST_LIST,
  setPostList,
  setPostListFailed,
} from 'actions/PostListActions';

export function* fetchPostListData() {
  try {
    const data = axios.get('https://edu-api.chop-chop.org/');
    yield put(setPostList(data));
  } catch (err) {
    yield put(setPostListFailed());
  }
}

export function* watchForFetchPostListData() {
  yield takeLatest(GET_POST_LIST, fetchPostListData);
}

export default function* rootSaga() {
  yield all([watchForFetchPostListData()]);
}
