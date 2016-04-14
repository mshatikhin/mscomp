const styles = require("./Blog.css");

import DocumentMeta from 'react-document-meta';
import { Paper } from "material-ui";
import WPClient from "../../components/Api/WPClient";
import {Component} from "react";

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        const wpClient = new WPClient();
        wpClient.getBlog("mshatikhin.wordpress.com", (data)=> {
            this.setState({
                posts: data.posts
            })
        });
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
                {this.state.posts.map((p)=> {
                    return <Paper zDepth={1} style={style}>
                        <h1>{p.title}</h1>
                        <div
                            dangerouslySetInnerHTML={this.createMarkup(p.content)}></div>
                    </Paper>
                })}
            </div>
        );
    }
}
