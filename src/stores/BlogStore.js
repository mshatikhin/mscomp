// /**
//  * Created by mshat on 19.04.2016.
//  *
//  */
// "use strict";
// import Immutable from "immutable";
// import Constants from "../constants/Constants";
// import {ReduceStore} from "flux/utils";
// import Dispatcher from "../dispatcher/AppDispatcher";
//
// let blogState;
// let postState;
//
// class BlogStore extends ReduceStore {
//
//     getState() {
//         if (blogState == null)
//             return null;
//
//         return blogState.toJS();
//     }
//
//     getPost(){
//          if (postState == null)
//             return null;
//
//         return postState.toJS();
//     }
//
//     getInitialState() {
//         return null;
//     }
//
//     reduce(newState, action) {
//         switch (action.type) {
//             case Constants.UPDATE_BLOG:
//                 blogState = Immutable.fromJS(action.content);
//                 return this.getState();
//             case Constants.UPDATE_POST:
//                 postState = Immutable.fromJS(action.content);
//                 return this.getPost();
//             default:
//                 return this.getInitialState();
//         }
//     }
// }
//
// const instance = new BlogStore(Dispatcher);
// export default instance;
