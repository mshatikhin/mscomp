import React, {Component} from "react";
import styles from "./Menu.css";
import { Link } from "react-router";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/home">home</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/photos">portfolio</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/blog">blog</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/about">contact</Link>
            </nav>
        );
    }
}
