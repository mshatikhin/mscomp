module types {
    export interface IFlickrPhoto {
        id: string;
        secret: string;
        server: string;
        farm: number
        title: string;
    }

    export interface IFlickrContent{
        _content: string;
    }

    export interface IFlickrPhotoSet {
        id: string;
        title: IFlickrContent;
        description: IFlickrContent;
        photos: number;
        primary_photo_extras: any;
    }

    export interface IFlickrPhotosets {
        photoset: IFlickrPhotoSet[];
    }

    export interface IFlickrResponse {
        stat: string;
        photosets: IFlickrPhotosets;
    }
}