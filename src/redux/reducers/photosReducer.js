// @flow

import { UPDATE_PHOTOS } from '../actions/photosActions';

const initialState = {
    photos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PHOTOS:
            state.photos = action.photos;
            return Object.assign({}, state);
        default:
            return state;
    }
}
