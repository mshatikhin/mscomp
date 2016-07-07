const styles = require("./Header.css");
const image = require("./images/logo_m.png");

import Menu from "../Menu/Menu";
import {Link} from "react-router";
import {Component} from "react";

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <Link to="/" className={styles.logoLink}>
                    <img src={image} className={styles.logo} title="Фотоблог Шатихина Михаила" alt="Фотоблог Шатихина Михаила"/>
                </Link>
                <Menu />
            </div>
        );
    }
}
