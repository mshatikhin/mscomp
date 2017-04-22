import {combineReducers} from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';

export default combineReducers({
    portfolio: albumsReducer,
    photos: photosReducer,
});
