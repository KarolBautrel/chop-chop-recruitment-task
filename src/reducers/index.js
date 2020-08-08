import { combineReducers } from 'redux';
import postListReducer from './postListReducer';

export default combineReducers({
  postList: postListReducer,
});
