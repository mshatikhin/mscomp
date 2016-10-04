// @flow

import { UPDATE_BLOG } from '../actions/blogActions';

const initialState = {
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_BLOG:
            return Object.assign({}, state, action.blog);
        default:
            return state;
    }
}
