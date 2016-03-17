import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Main from "../pages/Main/Main";
import NotFound from "../components/NotFound/NotFound";

export default (
    <Route path="/" component={ Layout }>
        <IndexRedirect to="main"/>
        <Route path="main" component={ Main }/>
        <Route path="*" component={ NotFound }/>
    </Route>
);

