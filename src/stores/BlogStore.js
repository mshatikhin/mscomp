/**
 * Created by mshat on 19.04.2016.
 *
 */
'use strict';

import {Action} from '../actions/BlogActions';

import {ReduceStore} from 'flux/utils';
import Dispatcher from '../dispatcher/AppDispatcher';

class BlogStore extends ReduceStore {
    static getInitialState() {
        return null;
    }

    static reduce(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }
}

const instance = new BlogStore(Dispatcher);
export default instance;