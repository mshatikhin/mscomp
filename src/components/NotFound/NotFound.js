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
                    <p>Page not found 404</p>
                    <a href="/">Redirect to portfolio page</a>
                </h1>
                <div className={styles.notFound}>
                </div>
            </div>
        );
    }
}
