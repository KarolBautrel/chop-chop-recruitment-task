import {
  GET_POST_LIST,
  SET_POST_LIST,
  SET_POST_LIST_SUCCESS,
  SET_POST_LIST_FAILED,
  TOGGLE_OPEN_MODAL,
  TOGGLE_CLOSE_MODAL,
  SET_AUTHOR_DATA,
  TOGGLE_OPEN_DESCRIPTION,
  GET_POST_DETAILS,
  SET_POST_DETAILS,
  SET_POST_DETAILS_FAILED,
  SET_POST_ID_TO_FETCH_DETAILS,
} from 'actions/PostListActions';

const initialState = {
  postListData: {},
  fetchingPostList: false,
  fetchingPostListFailed: false,
  isModalOpen: false,
  activeAuthorId: null,
  authorData: {},
  activePostId: null,
  postDetailsLoading: false,
  postDetailsLoadingFailed: false,
  postDetailsData: {},
  detailedPostId: null,
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
        fetchingPostList: false,
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

    case GET_POST_DETAILS:
      return {
        ...state,
        postDetailsLoading: true,
      };

    case SET_POST_DETAILS:
      return {
        ...state,
        postDetailsData: action.postDetails,
      };

    case SET_POST_DETAILS_FAILED:
      return {
        ...state,
        postDetailsLoading: false,
        postDetailsLoadingFailed: true,
      };

    case SET_POST_ID_TO_FETCH_DETAILS:
      return {
        ...state,
        detailedPostId: action.postId,
      };

    default:
      return state;
  }
}
