import {
  DISPATCH_LOGOUT,
  DISPATCH_SIGN_IN,
  DISPATCH_SIGN_IN_SUCCESS,
} from 'actions/AuthActions';

const initialState = {
  signingIn: false,
  signingInFailed: false,
  isUserLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPATCH_SIGN_IN:
      return {
        ...state,
        signingIn: true,
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
      };

    default:
      return state;
  }
}
