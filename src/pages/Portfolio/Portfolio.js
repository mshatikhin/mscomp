import styles from "./Portfolio.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import {browserHistory} from "react-router";
import AlbumsStore from "../../stores/AlbumsStore";
import {Component} from "react";

class PortfolioContainer extends Component {

    static getStores() {
        return [AlbumsStore];
    }

    static calculateState(prevState) {
        return {
            albums: AlbumsStore.getState()
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            albums: AlbumsStore.getInitialState()
        }
    }

    render() {
        const meta = {
            title: 'Портфолио Mikhail Shatikhin',
            description: 'Добро пожаловать в портфолио Mikhail Shatikhin',
            canonical: 'http://mshatikhin.com/photos',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Mikhail Shatikhin,блог,путешествия,фотографии,программирование'
                }
            }
        };
        return (
            <div className={styles.main}>
                <DocumentMeta {...meta} />
                {this.state.albums != null && this.state.albums.map((album) => {
                    var additionalClass = (album.primary_photo_extras.width_z - album.primary_photo_extras.height_z) > 0 ? styles.horizontalImage : styles.verticalImage;
                    return <div
                        key={album.id}
                        className={styles.card}
                        title="Перейти в альбом"
                        onClick={() => { browserHistory.push("/photos/" + album.id) } }>
                        <div className={styles.meta}>
                            <header className={styles.header}>{album.title._content}</header>
                            <span className={styles.countPhotos}>{album.photos} photos</span>
                        </div>
                        <img className={styles.mainImage + " " + additionalClass}
                            src={album.primary_photo_extras.url_z}
                            width={album.primary_photo_extras.width_z}
                            height={album.primary_photo_extras.height_z}/>
                    </div>
                }) }
            </div>
        );
    }
}

const container = Container.create(PortfolioContainer);
export default container;
