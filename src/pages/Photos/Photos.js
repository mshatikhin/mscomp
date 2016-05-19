﻿const styles = require("./Photos.css");

import DocumentMeta from "react-document-meta";
import {Link} from "react-router";
import FlickrClient from "../../components/Api/FlickrClient";
import {Paper} from "material-ui";
import {Component} from "react";

export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        this.getPictures(this.props.photoSetId);
    }

    getPictures(photoSetId: string) {
        var flickrClient = new FlickrClient();
        flickrClient.getPhotos("124274905@N03", "1173960c94df6700f0b57dccc50f0925", photoSetId, (photos)=> {
            this.setState({
                photos: photos
            });
        });
    };

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
                    {this.state.photos.map((photoUrl, index) => {
                        return <Paper zDepth={1} key={index} style={{marginBottom: 20}}>
                            <img className={styles.mainImage} src={photoUrl}/>
                        </Paper>
                    })}
                </div>
            </div>
        );
    }
}
