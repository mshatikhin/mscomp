const styles:any = require("./Photos.css");
import {Paper} from "material-ui";
import {Link} from "react-router";
import FlickrClient from "../../components/Api/FlickrClient";

interface IState {
    photos: string[];
}
interface IProps {
    photoSetId: string;
}

class Photos extends React.Component<IProps, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        this.getPictures(this.props.photoSetId);
    }

    getPictures = (photoSetId: string) => {
        var flickrClient = new FlickrClient();
        flickrClient.getPhotos("124274905@N03", "1173960c94df6700f0b57dccc50f0925", photoSetId, (photos: string[])=> {
            this.setState({
                photos: photos
            });
        })
    };

    render() {
        const style:React.CSSProperties = {
            marginBottom: 50
        };
        return (
            <div className={styles.main}>
                <div className={styles.backWrap}>
                    <Link to="photos" className={styles.back}>НАЗАД</Link>
                </div>
                {this.state.photos.map((photoUrl:any, index: number)=> {
                    return <Paper zDepth={1} style={style} key={index} >
                        <img className={styles.mainImage} src={photoUrl}/>
                    </Paper>
                })}
            </div>
        );
    }
}
export default Photos;
