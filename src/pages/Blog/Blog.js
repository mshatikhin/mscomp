/* @flow */

﻿import styles from "./Blog.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import Paper from "material-ui/Paper";
import BlogStore from "../../stores/BlogStore";
import {Component} from "react";

class BlogContainer extends Component {

    state: {
      posts: []
    }

    static getStores() {
        return [BlogStore];
    }

    static calculateState(prevState) {
        return {
            posts: BlogStore.getState()
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            posts: BlogStore.getInitialState()
        }
    }

    createMarkup(content) {
        return { __html: content };
    };

    render() {
        const style = {
            padding: 30,
            marginBottom: 30
        };

        const meta = {
            title: 'Блог Михаила Шатихина',
            description: 'Добро пожаловать в блог Михаила Шатихина',
            canonical: 'http://mshatikhin.com/blog',
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
                {this.state.posts != null &&
                    <ul className={styles.posts}>
                        {this.state.posts.map(p => <li key={p.ID} className={styles.postsLink}>
                            <Paper zDepth={1} style={style}>
                                <a href={`/blog/${p.ID}`} className={styles.link}>
                                    <header className={styles.postHeader}>{p.title}</header>
                                    <div dangerouslySetInnerHTML={this.createMarkup(p.excerpt + "<span>Читать далее...</span>")  }></div>
                                </a>
                            </Paper>
                        </li>) }
                    </ul>
                }
            </div>
        );
    }
}

const container = Container.create(BlogContainer);
export default container;
