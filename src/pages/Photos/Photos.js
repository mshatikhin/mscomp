import styles from "./Photos.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import {Link} from "react-router";
import {Paper} from "material-ui";
import PhotosStore from "../../stores/PhotosStore";
import PortfolioActions from "../../actions/PortfolioActions";
import {Component} from "react";

class PhotosContainer extends Component {

    static getStores() {
        return [PhotosStore];
    }

    static calculateState(prevState) {
        return {
            photos: PhotosStore.getState()
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            photos: PhotosStore.getInitialState()
        }
    }

    componentWillUnmount() {
        PortfolioActions.resetStore();
    }

    render() {
        const style = {
            padding: 30
        };

        const meta = {
            title: 'Портфолио Михаила Шатихина альбом ' + this.props.photoSetId,
            description: 'Добро пожаловать в портфолио Михаила Шатихина',
            canonical: 'http://mshatikhin.com/photos/' + this.props.photoSetId,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'михаил шатихин,блог,путешествия,фотографии,программирование'
                }
            }
        };

        return (
            this.state.photos && <div className={styles.main}>
                <DocumentMeta {...meta} />
                <div className={styles.backWrap}>
                    <Link to="/photos" className={styles.back}>
                        ВЕРНУТЬСЯ В ПОРТФОЛИО
                    </Link>
                </div>
                <div>
                    <Paper zDepth={1} style={style}>
                        {this.state.photos.map((photoUrl, index) => {
                            return <img key={index} className={styles.mainImage} src={photoUrl}/>
                        }) }
                    </Paper>
                </div>
                <div className={styles.backWrap}>
                    <Link to="/photos" className={styles.back}>
                        ВЕРНУТЬСЯ В ПОРТФОЛИО
                    </Link>
                </div>
            </div>
        );
    }
}

const container = Container.create(PhotosContainer);
export default container;