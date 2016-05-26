import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Photos from "../pages/Photos/Photos";
import Blog from "../pages/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import BlogActions from "../actions/BlogActions";
import PortfolioActions from "../actions/PortfolioActions";

let loadBlog = () => {
    BlogActions.getBlog("mshatikhin.wordpress.com");
};

let loadAlbums = () => {
    PortfolioActions.getAlbums("124274905@N03", "1173960c94df6700f0b57dccc50f0925");
};

let loadPhotos = (ctx: any) => {
    PortfolioActions.getPhotos("124274905@N03", "1173960c94df6700f0b57dccc50f0925",ctx.params.id);
};

export default (
    <Route path="/" component={ Layout }>
        <IndexRedirect to="photos"/>
        <Route path="blog" component={ Blog } onEnter={ loadBlog }/>
        <Route path="about" component={ About }/>
        <Route path="photos" component={ Portfolio } onEnter={ loadAlbums }/>
        <Route path="photos/:id" component={ Photos }  onEnter={ loadPhotos }/>
        <Route path="*" component={ NotFound }/>
    </Route>
);

