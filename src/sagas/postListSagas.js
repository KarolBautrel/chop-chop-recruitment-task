import { put, takeEvery, call, select } from 'redux-saga/effects';
import buildUrl from 'build-url';
import { httpGet, httpPost } from 'services/APICallService';
import { API_PATHS } from 'utils/apiConfig';
import {
  GET_POST_LIST,
  setPostList,
  setPostListSuccess,
  setPostListFailed,
  TOGGLE_OPEN_MODAL,
  setAuthorData,
  setPostDetails,
  setPostDetailsFailed,
  GET_POST_DETAILS,
  SEND_COMMENT_FORM,
  sendCommentFormSuccess,
  sendCommentFormFailed,
} from 'actions/PostListActions';

const selectUserToken = (state) => state.auth;
const selectPaginationParams = (state) => state.postList;

export function* fetchPostListData({ push }) {
  const { userToken } = yield select(selectUserToken);
  const { activePage, postListOrder, orderType } = yield select(
    selectPaginationParams
  );

  const url = buildUrl(API_PATHS.posts, {
    queryParams: {
      page: activePage,
      order: postListOrder,
      orderBy: orderType,
    },
  });

  try {
    const postListData = yield call(httpGet, url, userToken);

    yield put(setPostList(postListData));

    if (typeof postListData === 'string') {
      yield put(setPostListFailed());
    } else {
      yield call(push, url);
      yield put(setPostListSuccess());
    }
  } catch (err) {
    yield put(setPostListFailed());
  }
}

export function* toggleOpenModalSaga({ authorId }) {
  const { userToken } = yield select(selectUserToken);

  try {
    const { data } = yield call(
      httpGet,
      API_PATHS.author.replace(':id', authorId),
      userToken
    );

    yield put(setAuthorData(data));
  } catch (err) {
    console.log(err);
  }
}

export function* getPostDetailsSaga({ postId }) {
  const { userToken } = yield select(selectUserToken);

  try {
    const { data } = yield call(
      httpGet,
      API_PATHS.post.replace(':id', postId),
      userToken
    );

    yield put(setPostDetails(data));
  } catch (err) {
    yield put(setPostDetailsFailed(err));
  }
}

export function* sendCommentFormSaga({ formValues, postId }) {
  try {
    const { userToken } = yield select(selectUserToken);
    const config = {
      id: postId,
      comment: formValues.comment,
      name: formValues.author,
    };

    yield call(httpPost, API_PATHS.comments, { ...config }, userToken);
    yield put(sendCommentFormSuccess());
  } catch (err) {
    yield put(sendCommentFormFailed(err));
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

export function* watchForSendCommentFormSaga() {
  yield takeEvery(SEND_COMMENT_FORM, sendCommentFormSaga);
}
