// @flow

import "whatwg-fetch";

export const UPDATE_ALBUMS = 'UPDATE_ALBUMS';

export function updateAlbums(albums: any[]) {
    return { type: UPDATE_ALBUMS, albums };
}

export function albumsRequest(userId: string, apiKey: string) {
    return (dispatch: any) => {
        return fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&primary_photo_extras=url_z&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((response) => {
                if (response.stat === "ok") {
                    return dispatch(updateAlbums(response.photosets.photoset));
                }
            })
            .catch(({ errors }) => dispatch(updateAlbums([])));
    };
}