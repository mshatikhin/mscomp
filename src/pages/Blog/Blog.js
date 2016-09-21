// @flow

import styles from "./Blog.css";
import React, {Component} from "react";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import BlogStore from "../../stores/BlogStore";
import Loader from "../../components/Loader";﻿

type IState = {
    posts: any[];
}

class BlogContainer extends Component {
    state: IState;

    constructor(props) {
        super(props);
        this.state = {
            posts: BlogStore.getInitialState()
        }
    }

    static getStores() {
        return [BlogStore];
    }

    static calculateState() {
        return {
            posts: BlogStore.getState()
        };
    }

    createMarkup(content) {
        return {__html: content};
    };

    render() {
        const meta = {
            title: 'Блог Mikhail Shatikhin',
            description: 'Добро пожаловать в блог Mikhail Shatikhin',
            canonical: 'http://mshatikhin.com/blog',
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
                {this.state.posts == null ? <Loader /> : this.renderPosts()}
            </div>
        );
    }

    renderPosts() {
        return <ul className={styles.posts}>
            {this.state.posts.map(p =>
                <li key={p.ID} className={styles.postsLink}>
                    <div className={styles.card}>
                        <a href={`/blog/${p.ID}`} className={styles.link}>
                            <header className={styles.postHeader}>{p.title}</header>
                            <div dangerouslySetInnerHTML={this.createMarkup(p.excerpt +
                                         "<span class='"+styles.links+"'>Читать далее...</span>")  }>
                            </div>
                        </a>
                    </div>
                </li>)
            }
        </ul>
    }
}
const container = Container.create(BlogContainer);
export default container;
