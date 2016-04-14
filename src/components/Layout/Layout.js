import Header from "../Header/Header";
import {Component} from "react";

export default class Layout extends Component {
    constructor(props) {
        super(props);
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
