import Header from "../Header/Header";

interface ILayoutProps extends React.Props<any> {

}

interface ILayoutState {
}

class Layout extends React.Component<ILayoutProps, ILayoutState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    handleCollapse = (collapsed: boolean) => {
        this.setState({});
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
