export const GET_POST_LIST = 'GET_POST_LIST';
export const SET_POST_LIST = 'SET_POST_LIST';
export const SET_POST_LIST_FAILED = 'SET_POST_LIST_FAILED';

export const getPostList = () => ({
  type: GET_POST_LIST,
});

export const setPostList = (postListData) => ({
  type: SET_POST_LIST,
  postListData,
});

export const setPostListFailed = (err) => ({
  type: SET_POST_LIST,
  err,
});
