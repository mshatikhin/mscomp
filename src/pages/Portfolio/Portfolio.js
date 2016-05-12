const styles = require("./Portfolio.css");

import DocumentMeta from "react-document-meta";
import {Paper} from "material-ui";
import {browserHistory} from "react-router";
import FlickrClient from "../../components/Api/FlickrClient";
import {Component} from "react";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        this.getPictures()
    }

    getPictures() {
        var flickrClient = new FlickrClient();
        flickrClient.getAlbums("124274905@N03", "1173960c94df6700f0b57dccc50f0925", (albums) => {
            this.setState({
                albums: albums
            });
        })
    };

    render() {
        
        const meta = {
            title: 'Портфолио Михаила Шатихина',
            description: 'Добро пожаловать в портфолио Михаила Шатихина',
            canonical: 'http://mshatikhin.com/photos',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'михаил шатихин,блог,путешествия,фотографии,программирование'
                }
            }
        };
        return (
            <div className={styles.main}>
                <DocumentMeta {...meta} />
                {this.state.albums.map((album) => {
                    return <Paper zDepth={1}
                                  key={album.id}
                                  className={styles.card}
                                  title="Перейти в альбом"
                                  onClick={()=>{browserHistory.push("/photos/"+album.id)}}>
                        <div className={styles.meta}>
                            <header className={styles.header}>{album.title._content}</header>
                            <span className={styles.countPhotos}>{album.photos} photos</span>
                        </div>
                        <img className={styles.mainImage}
                             src={album.primary_photo_extras.url_z}
                             width={album.primary_photo_extras.width_z}
                             height={album.primary_photo_extras.height_z}/>
                    </Paper>
                })}
            </div>
        );
    }
}
