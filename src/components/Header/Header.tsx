const styles:any = require("./Header.css");
const image:any = require("./images/logo.png");

import Menu from "../Menu/Menu";
import {Link} from "react-router";

class Layout extends React.Component<any, {}> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <Link to="blog" className={styles.logoLink}>
                    <img src={image} className={styles.logo} title="Блог Шатихина Михаила" alt="Блог Шатихина Михаила"/>
                </Link>
                <Menu />
            </div>
        );
    }
}

export default Layout;
