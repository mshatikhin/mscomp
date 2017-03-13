// @flow

import React, {
    Component,
} from "react";
import styles from "./Slider.css";

class Slider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                {this.props.children}
            </div>
        );
    }
}

export default Slider;