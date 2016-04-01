const styles: any = require("./Header.css");
const image: any = require("./images/logo.png");

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
                    <div className={styles.logoWrapper}>
                        <img src={image} className={styles.logo} />
                    </div>
                </a>
                <header className={styles.title}>БЛОГ МИХАИЛА ШАТИХИНА</header>
            </div>
        );
    }
}

export default Layout;
