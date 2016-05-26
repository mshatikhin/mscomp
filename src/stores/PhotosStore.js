/**
 * Created by mshat on 19.04.2016.
 *
 */
"use strict";
import Immutable from "immutable";
import Constants from "../constants/Constants";
import {ReduceStore} from "flux/utils";
import Dispatcher from "../dispatcher/AppDispatcher";

let photosState;

class PhotosStore extends ReduceStore {

    getState() {
        if (photosState == null)
            return null;

        return photosState.toJS();
    }

    getInitialState() {
        return null;
    }

    reduce(newState, action) {
        switch (action.type) {
            case Constants.UPDATE_PHOTOS:
                photosState = Immutable.fromJS(action.content);
                return this.getState();
            case Constants.RESET_PHOTOS:
                photosState = null;
                return this.getState();
            default:
                return this.getState();
        }
    }
}

const instance = new PhotosStore(Dispatcher);
export default instance;