const styles: any = require("./Main.css");
import { Paper } from "material-ui";
import FlickrClient from "../../components/Api/FlickrClient";

interface IMainState {
    albums: types.IFlickrPhotoSet[];
}

class Main extends React.Component<any, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        this.getPictures()
    }

    getPictures = ()=> {
        var flickrClient = new FlickrClient();
        flickrClient.getAlbums("124274905@N03", "1173960c94df6700f0b57dccc50f0925", (albums)=> {
            this.setState({
                albums: albums
            });
        })
    };

    render() {
        const style: React.CSSProperties = {
            marginBottom: 50
        };
        return (
            <div className={styles.main}>
                {this.state.albums.map((album: any)=> {
                    return <Paper zDepth={1} style={style} key={album.id}>
                        <img className={styles.mainImage} src={album.primary_photo_extras.url_m}/>
                    </Paper>
                })}
            </div>
        );
    }
}

export default Main;
