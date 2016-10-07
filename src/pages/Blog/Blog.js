// @flow

import React, {Component, PropTypes} from "react";
import styles from "./Blog.css";
import {connect} from "react-redux";
import {blogRequest} from "../../redux/actions/blogActions";
import Loader from "../../components/Loader";
import {WP_SITE} from "../../utils/util";

const randomProperty = (obj) => {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.any
};

class BlogContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(blogRequest(WP_SITE));
    }

    createMarkup(content) {
        return {__html: content};
    };

    render() {
        return (
            this.props.posts.length === 0 ? <Loader /> : <div className={styles.main}>
                {this.renderPosts()}
            </div>
        );
    }

    renderPosts() {
        return <ul className={styles.posts}>
            {this.props.posts.map(p =>
                <li key={p.ID} className={styles.postsLink}>
                    <div className={styles.card}>
                        <a href={`/blog/${p.ID}`} className={styles.link}>
                            {p.attachment_count > 0 && <div className={styles.cardImage}>
                                <img src={randomProperty(p.attachments).thumbnails.medium}
                                     className={styles.img}
                                     width={300}
                                />
                            </div>}
                            <header className={styles.postHeader}>{p.title}</header>
                            <div className={styles.postWrap}>
                                <div dangerouslySetInnerHTML={this.createMarkup(p.excerpt)}></div>
                                <div className={styles.links}>Читать далее...</div>
                            </div>
                        </a>
                    </div>
                </li>)
            }
        </ul>
    }
}

BlogContainer.propTypes = propTypes;

const mapStateToProps = (props) => {
    const {posts} = props.blog;
    return {posts};
};
export default connect(mapStateToProps)(BlogContainer);
