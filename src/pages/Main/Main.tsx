const styles: any = require("./Main.css");
import { Paper } from "material-ui";
import FlickrClient from "../../components/Api/FlickrClient";

interface IMainState {
    photos: string[];
}
var interval: any = null;
class Main extends React.Component<any, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        this.getPictures()
    }

    getPictures = ()=> {
        var flickrClient = new FlickrClient();
        flickrClient.getPhotos("124274905@N03", "1173960c94df6700f0b57dccc50f0925", (photos)=> {
            this.setState({
                photos: photos
            });
        })
    };

    render() {
        return (
            <div className={styles.main}>
                {this.state.photos.map((url)=> {
                    return  <Paper zDepth={1}>
                        <a href="https://www.flickr.com/photos/124274905@N03/"
                           target="blank">
                            <img className={styles.mainImage}
                                 src={url}/>
                        </a>
                    </Paper>
                })}
            </div>
        );
    }
}

export default Main;
