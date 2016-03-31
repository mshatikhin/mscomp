const styles: any = require("./Header.css");
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
                <header className={styles.title}>БЛОГ МИХАИЛА ШАТИХИНА</header>
            </div>
        );
    }
}

export default Layout;
