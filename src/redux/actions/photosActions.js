// @flow

import "whatwg-fetch";

export const UPDATE_PHOTOS = 'UPDATE_PHOTOS';

export function updatePhotos(photos: any[]) {
    return { type: UPDATE_PHOTOS, photos };
}

export function photosRequest(userId: string, apiKey: string, photosetId: string) {
    return (dispatch: any) => {
        return fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&user_id=${userId}&photoset_id=${photosetId}&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((response) => {
                if (response.stat === "ok") {
                    const photos = response.photoset.photo.map(function (photo) {
                        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`
                    });
                    return dispatch(updatePhotos(photos));
                }
            })
            .catch(({ errors }) => dispatch(updatePhotos([])));
    };
}
