// @flow

import { UPDATE_POST } from '../actions/postActions';

const initialState = {};

export default function (state: any = initialState, action: any) {
    switch (action.type) {
        case UPDATE_POST:        
            return Object.assign({}, state, action.post);
        default:
            return state;
    }
}
