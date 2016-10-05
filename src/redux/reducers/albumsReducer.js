// @flow

import { UPDATE_ALBUMS } from '../actions/albumsActions';

type IState = {
    albums: any[];
}

const initialState = {
    albums: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_ALBUMS:
            state.albums = action.albums;
            return Object.assign({}, state);
        default:
            return state;
    }
}
