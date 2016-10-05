import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import postReducer from './postReducer';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';

export default combineReducers({
    blog: blogReducer,
    post: postReducer,
    portfolio: albumsReducer,
    photos: photosReducer,
});
