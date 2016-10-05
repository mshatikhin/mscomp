// @flow

import { UPDATE_BLOG } from '../actions/blogActions';

type IState = {
    posts: any[];
}

const initialState = {
    posts: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_BLOG:
            return Object.assign({}, state, action.blog);
        default:
            return state;
    }
}