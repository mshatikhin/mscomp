import "babel-polyfill";
import {browserHistory, Router} from "react-router";
import Routes from "./Routes";
import "./App.css";
const reactDom = require("react-dom");
var rootInstance = null;

var router = <Router history={browserHistory} routes={ Routes }/>;
rootInstance = reactDom.render(router, document.getElementById("app"));

if (module.hot) {
    var injection = require("react-hot-loader/Injection");
    injection.RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}