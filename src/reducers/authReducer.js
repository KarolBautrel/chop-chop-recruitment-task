import {
  DISPATCH_LOGOUT,
  SET_USER_TOKEN,
  DISPATCH_SIGN_IN,
  DISPATCH_SIGN_IN_SUCCESS,
} from 'actions/AuthActions';
import { authToken } from 'services/sessionServices';

const initialState = {
  signingIn: false,
  userToken: null,
  signingInFailed: false,
  isUserLoggedIn: authToken ? true : false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPATCH_SIGN_IN:
      return {
        ...state,
        signingIn: true,
      };

    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.userToken,
      };

    case DISPATCH_SIGN_IN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        signingIn: false,
      };

    case DISPATCH_LOGOUT:
      return {
        ...initialState,
        signingInFailed: true,
        isUserLoggedIn: false,
      };

    default:
      return state;
  }
}
