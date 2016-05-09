/**
 * Created by mshat on 28.03.2016.
 */
// @flow
export default class FlickrClient {
    getPhotos(userId:string, apiKey:string, photosetId:number, cb) {
        $.getJSON("https://api.flickr.com/services/rest/",
            {
                method: 'flickr.photosets.getPhotos',
                api_key: apiKey,
                photoset_id: photosetId,
                user_id: userId,
                format: 'json',
                nojsoncallback: 1
            }, (response) => {
                if (response.stat === "ok") {
                    const photos = response.photoset.photo.map(function (photo) {
                        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`
                    });
                    cb(photos);
                }
            });
    }

    getAlbums(userId:string, apiKey:string, cb) {
        $.getJSON("https://api.flickr.com/services/rest/",
            {
                method: 'flickr.photosets.getList',
                api_key: apiKey,
                user_id: userId,
                primary_photo_extras: "url_z",
                format: 'json',
                nojsoncallback: 1
            }, (response) => {
                if (response.stat === "ok") {
                    cb(response.photosets.photoset)
                }
            });
    };
}