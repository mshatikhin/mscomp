﻿const styles:any = require("./Portfolio.css");
import {Paper} from "material-ui";
import {browserHistory} from "react-router";
import FlickrClient from "../../components/Api/FlickrClient";

interface IState {
    albums:types.IFlickrPhotoSet[];
}

class Portfolio extends React.Component<any, IState> {
    constructor(props:any) {
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
        return (
            <div className={styles.main}>
                {this.state.albums.map((album:types.IFlickrPhotoSet)=> {
                    return <Paper zDepth={1}
                                  key={album.id}
                                  className={styles.card}
                                  title="Перейти в альбом"
                                  onClick={()=>{browserHistory.push("/photos/"+album.id)}}>
                        <div className={styles.meta}>
                            <header className={styles.header}>{album.title._content}</header>
                            <span className={styles.countPhotos}>{album.photos} photos</span>
                        </div>
                        <img className={styles.mainImage} src={album.primary_photo_extras.url_m}/>
                    </Paper>
                })}
            </div>
        );
    }
}

export default Portfolio;