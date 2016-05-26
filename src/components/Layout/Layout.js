import Header from "../Header/Header";
import {Component} from "react";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
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

Layout.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};