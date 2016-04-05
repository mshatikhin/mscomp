const styles: any = require("./Header.css");
const image: any = require("./images/logo.png");

import Menu from "../Menu/Menu";

interface IProps extends React.Props<any> {

}

interface IState {
}

class Layout extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.header}>
                <a href="/" className={styles.logoLink}>
                    <img src={image} className={styles.logo} title="Блог Шатихина Михаила" alt="Блог Шатихина Михаила" />
                </a>
                <Menu />
            </div>
        );
    }
}

export default Layout;
