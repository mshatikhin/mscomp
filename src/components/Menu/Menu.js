const styles = require("./Menu.css");
import { Link } from "react-router";
import {Component} from "react";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/photos">портфолио</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/blog">блог</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/about">контакты</Link>
            </nav>
        );
    }
}
