const styles: any = require("./Menu.css");
import { Link } from "react-router";

class Menu extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <Link className={styles.link} activeClassName={styles.activeLink} to="blog">blog</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="photos">portfolio</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="about">about</Link>
            </nav>
        );
    }
}

export default Menu;
