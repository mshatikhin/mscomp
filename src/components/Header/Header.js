// @flow

import styles from "./Header.css";
import Menu from "../Menu/Menu";
import {Link} from "react-router";
import React,{Component} from "react";

export default class Layout extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link to="/" className={styles.logoLink}>
                        <span className={styles.logoText}>photography <span className={styles.love}>♥</span></span>
                        <span className={styles.logoMainText}>MIKHAIL SHATIKHIN</span>
                    </Link>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                </div>
            </div>
        );
    }
}
