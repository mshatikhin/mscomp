const styles = require("./Header.css");
const image = require("./images/logo.png");

import Menu from "../Menu/Menu";
import {Link} from "react-router";
import {Component} from "react";

class Layout extends Component {
    constructor(props) {
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
