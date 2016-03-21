const styles: any = require("./Main.css");
import {Paper} from 'material-ui';

interface IMainState {
    url: string;
}
var interval: any = null;
class Main extends React.Component<any, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            url: ""
        }
    }

    setPicture = (url: string)=> {
        this.setState({
            url: url
        })
    }

    componentDidMount() {
        this.getPicture("124274905@N03");
        interval = setInterval(()=> {
            this.getPicture("124274905@N03");
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(interval);
    }

    getPicture = (the_user_id: string)=> {
        var apiKey = "1173960c94df6700f0b57dccc50f0925"; // replace this with your API key

        var url_to_a_photo_head = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=";
        var url_to_a_photo_tail = "&format=json&jsoncallback=?";

        $.getJSON("https://api.flickr.com/services/rest/", {
            method: 'flickr.people.getPublicPhotos',
            api_key: apiKey,
            user_id: the_user_id,
            format: 'json',
            nojsoncallback: 1,
            per_page: 10 // you can increase this to get a bigger array
        }, (data: any)=> {
            // if everything went good
            if (data.stat == 'ok') {
                // get a random id from the array
                var photo = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];

                // now call the flickr API and get the picture with a nice size
                var options2 = {
                    method: 'flickr.photos.getSizes',
                    api_key: apiKey,
                    photo_id: photo.id,
                    format: 'json',
                    nojsoncallback: 1
                };
                $.getJSON("https://api.flickr.com/services/rest/", options2, (response: any)=> {
                        if (response.stat == 'ok') {
                            var the_url = response.sizes.size[8].source;
                            this.setPicture(the_url);
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
        });
    };

    render() {
        return (
            <div className={styles.main}>
                <Paper zDepth={1}>
                    <a href="https://www.flickr.com/photos/124274905@N03/" target="blank">
                        <img className={styles.mainImage} src={this.state.url} height="600"/>
                    </a>
                </Paper>
            </div>
        );
    }
}

export default Main;
