// @flow

import React, {Component} from "react";
﻿import styles from "./Blog.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import BlogStore from "../../stores/BlogStore";

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

    static calculateState(prevState) {
        return {
            posts: BlogStore.getState()
        };
    }

    createMarkup(content) {
        return { __html: content };
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
                {this.state.posts != null &&
                    <ul className={styles.posts}>
                        {this.state.posts.map(p => <li key={p.ID} className={styles.postsLink}>
                            <div className={styles.card}>
                                <a href={`/blog/${p.ID}`} className={styles.link}>
                                    <header className={styles.postHeader}>{p.title}</header>
                                    <div dangerouslySetInnerHTML={this.createMarkup(p.excerpt +
                                    "<span class='"+styles.links+"'>Читать далее...</span>")  }>
                                    </div>
                                </a>
                            </div>
                        </li>) }
                    </ul>
                }
            </div>
        );
    }
}

const container = Container.create(BlogContainer);
export default container;
