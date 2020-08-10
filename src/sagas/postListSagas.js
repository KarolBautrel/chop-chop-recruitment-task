import { put, takeEvery, call } from 'redux-saga/effects';
import { httpGet } from 'services/APICallService';
import {
  GET_POST_LIST,
  setPostList,
  setPostListSuccess,
  setPostListFailed,
  TOGGLE_OPEN_MODAL,
  setAuthorData,
} from 'actions/PostListActions';
import {
  GET_POST_DETAILS,
  setPostDetailsFailed,
  setPostDetails,
} from '../actions/PostListActions';

export function* fetchPostListData() {
  try {
    const postListData = yield call(httpGet, 'posts');

    yield put(setPostList(postListData));

    yield put(setPostListSuccess());
  } catch (err) {
    yield put(setPostListFailed());
  }
}

export function* toggleOpenModalSaga({ authorId }) {
  try {
    const { data } = yield call(httpGet, `author/${authorId}`);

    yield put(setAuthorData(data));
  } catch (err) {
    console.log(err);
  }
}

export function* getPostDetailsSaga({ postId }) {
  try {
    const { data } = yield call(httpGet, `posts/${postId}`);

    yield put(setPostDetails(data));
  } catch (err) {
    yield put(setPostDetailsFailed(err));
  }
}

export function* watchForGetPostDetailsSaga() {
  yield takeEvery(GET_POST_DETAILS, getPostDetailsSaga);
}

export function* watchForToggleOpenModalSaga() {
  yield takeEvery(TOGGLE_OPEN_MODAL, toggleOpenModalSaga);
}

export function* watchForFetchPostListData() {
  yield takeEvery(GET_POST_LIST, fetchPostListData);
}
