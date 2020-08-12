import { getCurrentPageNumber } from 'services/componentsServices';
import {
  GET_POST_LIST,
  SET_POST_LIST,
  SET_POST_LIST_SUCCESS,
  SET_POST_LIST_FAILED,
  TOGGLE_OPEN_MODAL,
  TOGGLE_CLOSE_MODAL,
  SET_AUTHOR_DATA,
  GET_POST_DETAILS,
  SET_POST_DETAILS,
  SET_POST_DETAILS_FAILED,
  SET_POST_ID_TO_FETCH_DETAILS,
  SEND_COMMENT_FORM,
  SEND_COMMENT_FORM_SUCCESS,
  SEND_COMMENT_FORM_FAILED,
  SET_ACTIVE_PAGE,
  SET_POST_LIST_ORDER,
  SET_POST_LIST_ORDER_TYPE,
} from 'actions/PostListActions';

const activePageNumber = getCurrentPageNumber();

const initialState = {
  postListData: {},
  fetchingPostList: false,
  fetchingPostListFailed: false,
  isModalOpen: false,
  activeAuthorId: null,
  authorData: {},
  postDetailsLoading: false,
  postDetailsLoadingFailed: false,
  postDetailsData: {},
  detailedPostId: null,
  formValues: {},
  sendingFormComment: false,
  sendingFormCommentFailed: false,
  activePage: activePageNumber ? activePageNumber : 1,
  postListOrder: 'asc',
  orderType: 'title',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        fetchingPostList: true,
      };

    case SET_POST_LIST:
      return {
        ...state,
        postListData: action.postListData,
        fetchingPostListFailed: false,
      };

    case SET_POST_LIST_SUCCESS:
      return {
        ...state,
        fetchingPostList: false,
      };

    case SET_POST_LIST_FAILED:
      return {
        ...state,
        fetchingPostListFailed: true,
        fetchingPostList: false,
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

    case SEND_COMMENT_FORM:
      return {
        ...state,
        sendingFormComment: true,
        formValues: action.formValues,
      };

    case SEND_COMMENT_FORM_SUCCESS:
      return {
        ...state,
        sendingFormComment: false,
      };

    case SEND_COMMENT_FORM_FAILED:
      return {
        ...state,
        sendingFormComment: false,
        sendingFormCommentFailed: true,
      };

    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.pageNumber,
      };

    case SET_POST_LIST_ORDER:
      return {
        ...state,
        postListOrder: action.orderType,
      };

    case SET_POST_LIST_ORDER_TYPE:
      return {
        ...state,
        orderType: action.orderType,
      };

    default:
      return state;
  }
}
