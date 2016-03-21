const styles: any = require("./Main.css");
const $: any = require("jquery");

interface IMainState {
}

class Main extends React.Component<any, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.getPicture("87182509@N05");
    }

    getPicture(the_user_id: string) {
        var apiKey = "1173960c94df6700f0b57dccc50f0925"; // replace this with your API key

        var url_to_a_photo_head = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=";
        var url_to_a_photo_tail = "&format=json&jsoncallback=?";

        // get an array of random photos
        var options = {
            method: 'flickr.people.getPublicPhotos',
            api_key: apiKey,
            user_id: the_user_id,
            format: 'json',
            nojsoncallback: 1,
            per_page: 10 // you can increase this to get a bigger array
        };
        var success = function (data: any) {
            // if everything went good
            if (data.stat == 'ok') {
                // get a random id from the array
                var photoId = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];

                // now call the flickr API and get the picture with a nice size
                var options2 = {
                    method: 'flickr.photos.getSizes',
                    api_key: apiKey,
                    photo_id: photoId,
                    format: 'json',
                    nojsoncallback: 1
                };
                $.getJSON("https://api.flickr.com/services/rest/", options2, function (response: any) {
                        if (response.stat == 'ok') {
                            var the_url = response.sizes.size[5].source;
                            $("body").css({'background': the_url});
                        }
                        else {
                            console.log(" The request to get the picture was not good :\ ")
                        }
                    }
                );
            }
            else {
                console.log(" The request to get the array was not good :( ");
            }
        };
        $.getJSON("https://api.flickr.com/services/rest/", options, success);
    };

    render() {
        return (
            <div className={styles.main}>
                Website loading please wait...
            </div>
        );
    }
}

export default Main;
