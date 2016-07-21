import "babel-polyfill";
import "./App.css";
import {browserHistory, Router} from "react-router";
import Routes from "./Routes";

var rootInstance = null;
const router = <Router history={browserHistory} routes={ Routes }/>;
rootInstance = ReactDOM.render(router, document.getElementById("app"));

if (module.hot) {
    var injection = require("react-hot-loader/Injection");
    injection.RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}