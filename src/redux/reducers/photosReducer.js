// @flow

import { UPDATE_PHOTOS } from '../actions/photosActions';

type IState = {
    photos: any[];
}

const initialState = {
    photos: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_PHOTOS:
            state.photos = action.photos;
            return Object.assign({}, state);
        default:
            return state;
    }
}
