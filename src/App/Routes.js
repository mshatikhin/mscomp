import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Photos from "../pages/Photos/Photos";
import Blog from "../pages/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import BlogActions from "../actions/BlogActions";

let loadBlog = () => {
    BlogActions.getBlog("mshatikhin.wordpress.com");
};

export default (
    <Route path="/" component={ Layout }>
        <IndexRedirect to="photos"/>
        <Route path="blog" component={ Blog } onEnter={ loadBlog }/>
        <Route path="about" component={ About }/>
        <Route path="photos" component={ Portfolio }/>
        <Route path="photos/:id" component={ (ctx: any)=> <Photos photoSetId={ctx.params.id} /> }/>
        <Route path="*" component={ NotFound }/>
    </Route>
);

