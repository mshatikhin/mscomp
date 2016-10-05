// import "whatwg-fetch";
// import AppDispatcher from "../dispatcher/AppDispatcher";
// import Constants from "../constants/Constants";
//
// class PortfolioStatic {
//
//     getPhotos(userId, apiKey, photosetId) {
//         fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&user_id=${userId}&photoset_id=${photosetId}&format=json&nojsoncallback=1`)
//             .then(response => response.json())
//             .then(response => {
//                 if (response.stat === "ok") {
//                     const photos = response.photoset.photo.map(function (photo) {
//                         return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`
//                     });
//                     AppDispatcher.dispatch({
//                         type: Constants.UPDATE_PHOTOS,
//                         content: photos
//                     });
//                 }
//             });
//     }
//
//     getAlbums(userId, apiKey) {
//         fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&primary_photo_extras=url_z&format=json&nojsoncallback=1`)
//             .then(response => response.json())
//             .then(response => {
//                 if (response.stat === "ok") {
//                     AppDispatcher.dispatch({
//                         type: Constants.UPDATE_ALBUMS,
//                         content: response.photosets.photoset
//                     });
//                 }
//             });
//     }
//
//     resetStore() {
//         AppDispatcher.dispatch({
//             type: Constants.RESET_PHOTOS
//         });
//     }
// }
//
// const actions = new PortfolioStatic();
// export default actions;
