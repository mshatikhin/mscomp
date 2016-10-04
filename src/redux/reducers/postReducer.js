// @flow

import { UPDATE_POST } from '../actions/postActions';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_POST:        
            return Object.assign({}, state, action.post);
        default:
            return state;
    }
}
