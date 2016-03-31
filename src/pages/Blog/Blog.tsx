const styles: any = require("./Blog.css");
import { Paper } from "material-ui";

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
        this.getBlog("mshatikhin.wordpress.com");
    }

    createMarkup(content: string) {
        return {__html: content};
    };

    getBlog = ($site: string)=> {
        $.getJSON("https://public-api.wordpress.com/rest/v1.1/sites/" + $site + "/posts/", (data: any)=> {
            console.log(data);
            this.setState({
                posts: data.posts
            })
        });
    };

    render() {
        const style: React.CSSProperties = {
            padding: 30,
            marginBottom: 50
        };
        return (
            <div className={styles.main}>
                {this.state.posts.map((p: IPost)=> {
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

export default Blog;
