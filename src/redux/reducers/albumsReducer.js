// @flow

import { UPDATE_ALBUMS } from '../actions/albumsActions';

const initialState = {
    albums: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_ALBUMS:
            state.albums = action.albums;
            return Object.assign({}, state);
        default:
            return state;
    }
}
