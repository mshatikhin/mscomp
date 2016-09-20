// @flow

import React, {Component} from "react";
import styles from "./Post.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import {Link} from "react-router";
import BlogStore from "../../stores/BlogStore";

type IState = {
    post: any;
}

class PostContainer extends Component {
    state: IState;

    static getStores() {
        return [BlogStore];
    }

    static calculateState() {
        return {
            post: BlogStore.getPost()
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    createMarkup(content) {
        return { __html: content };
    };

    render() {
        const meta = this.state.post && {
            title: 'Блог Mikhail Shatikhin - '+ this.state.post.title,
            description: 'Добро пожаловать в блог Mikhail Shatikhin',
            canonical: 'http://mshatikhin.com/blog/' + this.state.post.ID,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Mikhail Shatikhin,блог,путешествия,фотографии,программирование'
                }
            }
        };

        return (
            this.state.post && <div className={styles.main}>
                <DocumentMeta {...meta} />
                <div className={styles.backWrap}>
                    <Link to="/blog" className={styles.back}>
                        BACK TO BLOG
                    </Link>
                </div>
                <div className={styles.card}>
                    <h1>{this.state.post.title}</h1>
                    <div dangerouslySetInnerHTML={this.createMarkup(this.state.post.content) }></div>
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

const container = Container.create(PostContainer);
export default container;
