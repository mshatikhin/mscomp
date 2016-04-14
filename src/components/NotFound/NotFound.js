const styles = require("./NotFound.css");
import {Component} from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className={styles.notFoundHeader}>
                    Извините, страница не найдена.<br/>
                    Ошибка 404. <br/>
                    <a href="/">Вернуться на главную страницу</a>
                </h1>
                <div className={styles.notFound}>
                </div>
            </div>
        );
    }
}

export default NotFound;
