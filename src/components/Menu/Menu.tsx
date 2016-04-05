const styles: any = require("./Menu.css");
import { Link } from "react-router";

interface IProps extends React.Props<any> {

}

interface IState {
}

class Menu extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <Link className={styles.link} activeClassName={styles.activeLink} to="blog">blog</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="photos">portfolio</Link>
            </nav>
        );
    }
}

export default Menu;
