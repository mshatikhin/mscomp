const styles = require("./NotFound.css");
import {Component} from "react";

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className={styles.notFoundHeader}>
                    Извините, страница не найдена.
                </h1>
                <div className={styles.notFound}>
                </div>
            </div>
        );
    }
}
