import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { browserHistory } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes";
import configureStore from '../redux/configureStore';

const store = configureStore({});

const component = (
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes(store)}
        </Router>
    </Provider>
);

ReactDOM.render(component, document.getElementById("app"));
