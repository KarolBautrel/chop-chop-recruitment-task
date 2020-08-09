import { put, takeEvery, call } from 'redux-saga/effects';
import { httpGet } from 'services/APICallService';
import {
  GET_POST_LIST,
  setPostList,
  setPostListSuccess,
  setPostListFailed,
} from 'actions/PostListActions';

export function* fetchPostListData() {
  try {
    const postListData = yield call(httpGet, 'posts');

    yield put(setPostList(postListData));

    yield put(setPostListSuccess());
  } catch (err) {
    yield put(setPostListFailed());
  }
}

export function* watchForFetchPostListData() {
  yield takeEvery(GET_POST_LIST, fetchPostListData);
}
