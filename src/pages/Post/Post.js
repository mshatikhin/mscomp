// @flow

import React, { Component, PropTypes } from "react";
import styles from "./Post.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import { Link, withRouter } from "react-router";
import { connect } from "react-redux";
import { postRequest } from '../../redux/actions/postActions';
import Loader from "../../components/Loader";

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
        this.props.dispatch(postRequest("mshatikhin.wordpress.com", this.props.id));
    }

    createMarkup(content) {
        return { __html: content };
    };

    render() {
        const post = this.props.post;

        const meta = post.content && {
            title: 'Блог Mikhail Shatikhin - ' + post.title,
            description: 'Добро пожаловать в блог Mikhail Shatikhin',
            canonical: 'http://mshatikhin.com/blog/' + post.ID,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Mikhail Shatikhin,блог,путешествия,фотографии,программирование'
                }
            }
        };
        return (
            post.content == null ? <Loader /> : <div className={styles.main}>
                <DocumentMeta {...meta} />
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
}
export default withRouter(connect(mapStateToProps)(PostContainer));
