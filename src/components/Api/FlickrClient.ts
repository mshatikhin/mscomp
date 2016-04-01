/**
 * Created by mshat on 28.03.2016.
 */

interface IFlickrPhoto {
    id: string;
    secret: string;
    server: string;
    farm: number
    title: string;
}

interface IFlickrPhotoSet {
    id: string;
    title: string;
    description: string;
    photos: string;
}

interface IFlickrPhotosets {
    photoset: IFlickrPhotoSet[];
}

interface IFlickrResponse {
    stat: string;
    photosets: IFlickrPhotosets;
}

class FlickrClient {
    constructor() {
    }

    getPhotos = (userId: string, apiKey: string, cb: (data: any)=>void)=> {
        $.getJSON("https://api.flickr.com/services/rest/",
            {
                method: 'flickr.photosets.getList',
                api_key: apiKey,
                user_id: userId,
                format: 'json',
                nojsoncallback: 1,
                per_page: 10
            }, (response: IFlickrResponse)=> {
                if (response.stat === "ok") {
                    response.photosets.photoset.forEach((p: IFlickrPhotoSet)=> {

                    });
                    $.getJSON("https://api.flickr.com/services/rest/",
                        {
                            method: 'flickr.photosets.getPhotos',
                            api_key: apiKey,
                            photoset_id: response.photosets.photoset[0].id,
                            user_id: userId,
                            format: 'json',
                            nojsoncallback: 1,
                            per_page: 10
                        }, (response: any)=> {
                            console.log(response);
                            if (response.stat === "ok") {
                                const photos = response.photoset.photo.map((photo: IFlickrPhoto)=> {
                                    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                                })
                                cb(photos)
                            }
                        });
                }
            });
    };
}

export default FlickrClient;