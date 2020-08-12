export const GET_POST_LIST = 'GET_POST_LIST';
export const SET_POST_LIST = 'SET_POST_LIST';
export const SET_POST_LIST_SUCCESS = 'SET_POST_LIST_SUCCESS';
export const SET_POST_LIST_FAILED = 'SET_POST_LIST_FAILED';

export const TOGGLE_OPEN_MODAL = 'TOGGLE_OPEN_MODAL';
export const TOGGLE_CLOSE_MODAL = 'TOGGLE_CLOSE_MODAL';
export const SET_AUTHOR_DATA = 'SET_AUTHOR_DATA';

export const GET_POST_DETAILS = 'GET_POST_DETAILS';
export const SET_POST_DETAILS = 'SET_POST_DETAILS';
export const SET_POST_DETAILS_FAILED = 'SET_POST_DETAILS_FAILED';
export const SET_POST_ID_TO_FETCH_DETAILS = 'SET_POST_ID_TO_FETCH_DETAILS';

export const SEND_COMMENT_FORM = 'SEND_COMMENT_FORM';
export const SEND_COMMENT_FORM_SUCCESS = 'SEND_COMMENT_FORM_SUCCESS';
export const SEND_COMMENT_FORM_FAILED = 'SEND_COMMENT_FORM_FAILED';

export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const SET_POST_LIST_ORDER = 'SET_POST_LIST_ORDER';
export const SET_POST_LIST_ORDER_TYPE = 'SET_POST_LIST_ORDER_TYPE';

export const getPostList = (push) => ({
  type: GET_POST_LIST,
  push,
});

export const setPostList = (postListData) => ({
  type: SET_POST_LIST,
  postListData,
});

export const setPostListSuccess = () => ({
  type: SET_POST_LIST_SUCCESS,
});

export const setPostListFailed = (err) => ({
  type: SET_POST_LIST_FAILED,
  err,
});

export const toggleOpenModal = (authorId) => ({
  type: TOGGLE_OPEN_MODAL,
  authorId,
});

export const toggleCloseModal = () => ({
  type: TOGGLE_CLOSE_MODAL,
});

export const setAuthorData = (authorData) => ({
  type: SET_AUTHOR_DATA,
  authorData,
});

export const setPostIdToFetchDetails = (postId) => ({
  type: SET_POST_ID_TO_FETCH_DETAILS,
  postId,
});

export const getPostDetails = (postId) => ({
  type: GET_POST_DETAILS,
  postId,
});

export const setPostDetails = (postDetails) => ({
  type: SET_POST_DETAILS,
  postDetails,
});

export const setPostDetailsFailed = (err) => ({
  type: SET_POST_DETAILS_FAILED,
  err,
});

export const sendCommentForm = (formValues, postId) => ({
  type: SEND_COMMENT_FORM,
  formValues,
  postId,
});

export const sendCommentFormSuccess = () => ({
  type: SEND_COMMENT_FORM_SUCCESS,
});

export const sendCommentFormFailed = (err) => ({
  type: SEND_COMMENT_FORM_FAILED,
  err,
});

export const setActivePage = (pageNumber) => ({
  type: SET_ACTIVE_PAGE,
  pageNumber,
});

export const setPostListOrder = (orderType) => ({
  type: SET_POST_LIST_ORDER,
  orderType,
});

export const setPostListOrderType = (orderType) => ({
  type: SET_POST_LIST_ORDER_TYPE,
  orderType,
});
