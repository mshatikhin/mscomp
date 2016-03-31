import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Main from "../pages/Main/Main";
import Blog from "../pages/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";

export default (
    <Route path="/" component={ Layout }>
        <IndexRedirect to="blog"/>
        <Route path="main" component={ Main }/>
        <Route path="blog" component={ Blog }/>
        <Route path="*" component={ NotFound }/>
    </Route>
);

