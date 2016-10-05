// @flow

import React, {PropTypes, Component} from "react";
import styles from "./Portfolio.css";
import {connect} from "react-redux";
import {browserHistory, withRouter} from "react-router";
import Loader from "../../components/Loader";
import {albumsRequest} from "../../redux/actions/albumsActions";
import {FLICKR_USER_ID, FLICKR_API_KEY} from "../../utils/util";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    albums: PropTypes.any
};

class PortfolioContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(albumsRequest(FLICKR_USER_ID, FLICKR_API_KEY));
    }

    render() {
        return (
            <div className={styles.main}>
                {this.props.albums.length == 0 ? <Loader /> : this.props.albums.map((album) => {
                    const additionalClass = (album.primary_photo_extras.width_z - album.primary_photo_extras.height_z) > 0 ? styles.horizontalImage : styles.verticalImage;
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

PortfolioContainer.propTypes = propTypes;

const mapStateToProps = (props) => {
    const {albums} = props.portfolio;
    return {albums};
};
export default withRouter(connect(mapStateToProps)(PortfolioContainer));