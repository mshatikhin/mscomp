// @flow

import React from "react";
import styles from "./Loader.css";

class Loader extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.cssload_container}>
                <div className={styles.cssload_circle}></div>
            </div>
        );
    }
}

export default Loader;