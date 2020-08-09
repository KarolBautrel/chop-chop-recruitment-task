import { combineReducers } from 'redux';
import postListReducer from './postListReducer';
import authReducer from './authReducer';

export default combineReducers({
  postList: postListReducer,
  auth: authReducer,
});
