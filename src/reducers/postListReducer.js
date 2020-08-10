import {
  GET_POST_LIST,
  SET_POST_LIST,
  SET_POST_LIST_SUCCESS,
  SET_POST_LIST_FAILED,
  TOGGLE_OPEN_MODAL,
  TOGGLE_CLOSE_MODAL,
  SET_AUTHOR_DATA,
  TOGGLE_OPEN_DESCRIPTION,
  TOGGLE_CLOSE_DESCRIPTION,
} from 'actions/PostListActions';

const initialState = {
  postListData: {},
  fetchingPostList: false,
  fetchingPostListFailed: false,
  isModalOpen: false,
  activeAuthorId: null,
  authorData: {},
  activePostId: null,
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
        ...state,
        postListData: action.postListData,
      };

    case SET_POST_LIST_SUCCESS:
      return {
        ...state,
        fetchingPostList: false,
      };

    case SET_POST_LIST_FAILED:
      return {
        ...initialState,
        fetchingPostListFailed: true,
      };

    case TOGGLE_OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        activeAuthorId: action.authorId,
      };

    case TOGGLE_CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        activeAuthorId: null,
        authorData: {},
      };

    case SET_AUTHOR_DATA:
      return {
        ...state,
        authorData: action.authorData,
      };

    case TOGGLE_OPEN_DESCRIPTION:
      return {
        ...state,
        activePostId: action.postId,
      };

    default:
      return state;
  }
}
