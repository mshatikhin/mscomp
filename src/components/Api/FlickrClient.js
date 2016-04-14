/**
 * Created by mshat on 28.03.2016.
 */
class FlickrClient {
    constructor(){
    }

    getPhotos(userId, apiKey, photosetId, cb) {
        $.getJSON("https://api.flickr.com/services/rest/",
            {
                method: 'flickr.photosets.getPhotos',
                api_key: apiKey,
                photoset_id: photosetId,
                user_id: userId,
                format: 'json',
                nojsoncallback: 1
            }, function(response) {
                if (response.stat === "ok") {
                    const photos = response.photoset.photo.map(function(photo) {
                        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`
                    });
                    cb(photos);
                }
            });
    }

    getAlbums(userId, apiKey, cb) {
        $.getJSON("https://api.flickr.com/services/rest/",
            {
                method: 'flickr.photosets.getList',
                api_key: apiKey,
                user_id: userId,
                primary_photo_extras: "url_z",
                format: 'json',
                nojsoncallback: 1
            }, function(response) {
                if (response.stat === "ok") {
                    cb(response.photosets.photoset)
                }
            });
    };
}
export default FlickrClient;