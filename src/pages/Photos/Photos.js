// @flow

import React, {Component} from "react";
import styles from "./Photos.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import {Link} from "react-router";
import PhotosStore from "../../stores/PhotosStore";
import PortfolioActions from "../../actions/PortfolioActions";

type IState = {
    photos: any[];
}

class PhotosContainer extends Component {
    state: IState;

    static getStores() {
        return [PhotosStore];
    }

    static calculateState() {
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
            title: 'Портфолио Mikhail Shatikhin альбом ' + this.props.photoSetId,
            description: 'Добро пожаловать в портфолио Mikhail Shatikhin',
            canonical: 'http://mshatikhin.com/photos/' + this.props.photoSetId,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Mikhail Shatikhin,блог,путешествия,фотографии,программирование'
                }
            }
        };

        return (
            this.state.photos && <div className={styles.main}>
                <DocumentMeta {...meta} />
                <div className={styles.backWrap}>
                    <Link to="/photos" className={styles.back}>
                        BACK TO PORTFOLIO
                    </Link>
                </div>
                <div>
                    <div>
                        {this.state.photos.map((photoUrl, index) => {
                            return <img key={index} className={styles.mainImage} src={photoUrl}/>
                        }) }
                    </div>
                </div>
                <div className={styles.backWrap}>
                    <Link to="/photos" className={styles.back}>
                        BACK TO PORTFOLIO
                    </Link>
                </div>
            </div>
        );
    }
}

const container = Container.create(PhotosContainer);
export default container;
