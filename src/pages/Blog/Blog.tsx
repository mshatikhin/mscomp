const styles: any = require("./Blog.css");

import DocumentMeta from 'react-document-meta';
import { Paper } from "material-ui";
import WPClient from "../../components/Api/WPClient";

interface IPost {
    title: string;
    content: string;
    ID: number;
}

interface IMainState {
    posts: IPost[];
}

class Blog extends React.Component<any, IMainState> {
    constructor(props: any) {
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

    createMarkup(content: string) {
        return {__html: content};
    };

    render() {
        const style: React.CSSProperties = {
            padding: 30,
            marginBottom: 50
        };

        const meta = {
            title: 'Блог Михаила Шатихина',
            description: 'I am a description, and I can create multiple tags',
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
                {this.state.posts.map((p: IPost)=> {
                    return <Paper zDepth={1} style={style}>
                        <DocumentMeta {...meta} />
                        <h1>{p.title}</h1>
                        <div
                            dangerouslySetInnerHTML={this.createMarkup(p.content)}></div>
                    </Paper>
                })}
            </div>
        );
    }
}

export default Blog;
