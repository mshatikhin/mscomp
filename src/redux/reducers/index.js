import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import postReducer from './postReducer';

export default combineReducers({
  blog: blogReducer,
  post: postReducer,
});
