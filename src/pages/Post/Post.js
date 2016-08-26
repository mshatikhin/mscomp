import styles from "./Post.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import {Link} from "react-router";
import BlogStore from "../../stores/BlogStore";
import {Component} from "react";

class PostContainer extends Component {

    static getStores() {
        return [BlogStore];
    }

    static calculateState(prevState) {
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
            title: 'Портфолио Михаила Шатихина',
            description: 'Добро пожаловать в портфолио Михаила Шатихина',
            canonical: 'http://mshatikhin.com/post' + this.state.post.ID,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'михаил шатихин,блог,путешествия,фотографии,программирование'
                }
            }
        };

        return (
            this.state.post && <div className={styles.main}>
                <DocumentMeta {...meta} />
                <div className={styles.backWrap}>
                    <Link to="/blog" className={styles.back}>
                        ВЕРНУТЬСЯ В БЛОГ
                    </Link>
                </div>
                <div className={styles.card}>
                    <h1>{this.state.post.title}</h1>
                    <div dangerouslySetInnerHTML={this.createMarkup(this.state.post.content) }></div>
                </div>
                <div className={styles.backWrap}>
                    <Link to="/blog" className={styles.back}>
                        ВЕРНУТЬСЯ В БЛОГ
                    </Link>
                </div>
            </div>
        );
    }
}

const container = Container.create(PostContainer);
export default container;
