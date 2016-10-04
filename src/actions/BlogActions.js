// /* @flow */
//
// import "whatwg-fetch";
// import AppDispatcher from "../dispatcher/AppDispatcher";
// import Constants from "../constants/Constants";
//
// class BlogStatic {
//     getBlog(site: string) {
//         fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/`)
//             .then(response => response.json())
//             .then((data) => {
//                 AppDispatcher.dispatch({
//                     type: Constants.UPDATE_BLOG,
//                     content: data.posts
//                 });
//             });
//     }
//
//     getPost(site: string, id: string) {
//         fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/${id}`)
//             .then(response => response.json())
//             .then((post) => {
//                 AppDispatcher.dispatch({
//                     type: Constants.UPDATE_POST,
//                     content: post
//                 });
//             });
//     }
// }
//
// const actions = new BlogStatic();
// export default actions;
