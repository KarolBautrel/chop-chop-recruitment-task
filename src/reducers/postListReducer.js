import {
  GET_POST_LIST,
  SET_POST_LIST,
  SET_POST_LIST_FAILED,
} from 'actions/PostListActions';

const initialState = {
  postListData: {},
  fetchingPostList: false,
  fetchingPostListFailed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...initialState,
        fetchingPostList: true,
      };

    case SET_POST_LIST:
      return {
        ...initialState,
        postListData: action.payload,
        fetchingPostList: false,
      };

    case SET_POST_LIST_FAILED:
      return {
        ...initialState,
        fetchingPostListFailed: true,
      };

    default:
      return state;
  }
}