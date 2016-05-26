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
            <div className={styles.main}>
                <DocumentMeta {...meta} />
                <div className={styles.backWrap}>
                    <Link to="photos" className={styles.back}>
                        НАЗАД
                    </Link>
                </div>
                <div>
                    {this.state.photos != null && this.state.photos.map((photoUrl, index) => {
                        return <Paper zDepth={1} key={index} style={{marginBottom: 20}}>
                            <img className={styles.mainImage} src={photoUrl}/>
                        </Paper>
                    })}
                </div>
            </div>
        );
    }
}

const container = Container.create(PhotosContainer);
export default container;