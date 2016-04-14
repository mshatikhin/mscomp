/**
 * Created by mshat on 28.03.2016.
 */
export default class WPClient {
    getBlog($site, cb) {
        $.getJSON("https://public-api.wordpress.com/rest/v1.1/sites/" + $site + "/posts/", (data) => {
            cb(data);
        });
    };
}