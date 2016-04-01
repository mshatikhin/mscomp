/**
 * Created by mshat on 28.03.2016.
 */
class WPClient {

    constructor(){}

    getBlog = ($site: string, cb: (data: any)=>void)=> {
        $.getJSON("https://public-api.wordpress.com/rest/v1.1/sites/" + $site + "/posts/", (data: any)=> {
            cb(data);
        });
    };
}

export default WPClient;