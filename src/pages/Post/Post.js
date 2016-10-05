// @flow

import React, { Component, PropTypes } from "react";
import styles from "./Post.css";
import {Container} from "flux/utils";
import { Link, withRouter } from "react-router";
import { connect } from "react-redux";
import { postRequest } from '../../redux/actions/postActions';
import Loader from "../../components/Loader";
import {WP_SITE} from "../../utils/util";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.any,
    id: PropTypes.string.isRequired
};

class PostContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(postRequest(WP_SITE, this.props.id));
    }

    createMarkup(content) {
        return { __html: content };
    };

    render() {
        const post = this.props.post;
        return (
            post.content == null ? <Loader /> : <div className={styles.main}>
                <div className={styles.backWrap}>
                    <Link to="/blog" className={styles.back}>
                        BACK TO BLOG
                    </Link>
                </div>
                <div className={styles.card}>
                    <h1>{post && post.title}</h1>
                    <div dangerouslySetInnerHTML={this.createMarkup(post && post.content) }></div>
                </div>
                <div className={styles.backWrap}>
                    <Link to="/blog" className={styles.back}>
                        BACK TO BLOG
                    </Link>
                </div>
            </div>
        );
    }
}

PostContainer.propTypes = propTypes;

const mapStateToProps = (props, ownProps) => {
    const { post } = props;
    const { id } = ownProps.params;
    return { post, id };
};
export default withRouter(connect(mapStateToProps)(PostContainer));
