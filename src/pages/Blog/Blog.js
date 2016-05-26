import styles from "./Blog.css";
import {Container} from "flux/utils";
import DocumentMeta from "react-document-meta";
import Paper from "material-ui/Paper";
import BlogStore from "../../stores/BlogStore";
import {Component} from "react";

class BlogContainer extends Component {

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
        return {__html: content};
    };

    render() {
        const style = {
            padding: 30,
            marginBottom: 50
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
                {this.state.posts != null && this.state.posts.map((p)=> {
                    return <Paper key={p.ID} zDepth={1} style={style}>
                        <h1>{p.title}</h1>
                        <div
                            dangerouslySetInnerHTML={this.createMarkup(p.content)}></div>
                    </Paper>
                })}
            </div>
        );
    }
}


const container = Container.create(BlogContainer);
export default container;
