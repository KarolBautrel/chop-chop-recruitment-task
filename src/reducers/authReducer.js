import {
  DISPATCH_LOGOUT,
  DISPATCH_SIGN_IN,
  DISPATCH_SIGN_IN_SUCCESS,
} from 'actions/AuthActions';

const initialState = {
  isUserLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPATCH_SIGN_IN:
      return {
        ...initialState,
        user: action.payload,
      };

    case DISPATCH_SIGN_IN_SUCCESS:
      return {
        ...initialState,
        isUserLoggedIn: true,
      };

    case DISPATCH_LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
