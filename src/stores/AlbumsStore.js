/**
 * Created by mshat on 19.04.2016.
 *
 */
"use strict";
import Immutable from "immutable";
import Constants from "../constants/Constants";
import {ReduceStore} from "flux/utils";
import Dispatcher from "../dispatcher/AppDispatcher";

let albumsState;

class AlbumsStore extends ReduceStore {

    getState() {
        if (albumsState == null)
            return null;

        return albumsState.toJS();
    }

    getInitialState() {
        return null;
    }

    reduce(newState, action) {
        switch (action.type) {
            case Constants.UPDATE_ALBUMS:
                albumsState = Immutable.fromJS(action.content);
                return this.getState();
            default:
                return this.getState();
        }
    }
}

const instance = new AlbumsStore(Dispatcher);
export default instance;