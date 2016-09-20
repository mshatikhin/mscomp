import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Photos from "../pages/Photos/Photos";
import Main from "../pages/Main/Main";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Post from "../pages/Post/Post";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import BlogActions from "../actions/BlogActions";
import PortfolioActions from "../actions/PortfolioActions";

let loadBlog = () => {
    BlogActions.getBlog("mshatikhin.wordpress.com");
};

let loadPost = (ctx) => {
    BlogActions.getPost("mshatikhin.wordpress.com", ctx.params.id);
};

let loadAlbums = () => {
    PortfolioActions.getAlbums("124274905@N03", "1173960c94df6700f0b57dccc50f0925");
};

let loadPhotos = (ctx) => {
    PortfolioActions.getPhotos("124274905@N03", "1173960c94df6700f0b57dccc50f0925", ctx.params.id);
};

export default (
    <Route path="/" component={ Layout }>
        <IndexRedirect to="home"/>
        <Route path="blog" component={ Blog } onEnter={ loadBlog }/>
        <Route path="blog/:id" component={ Post } onEnter={ loadPost }/>
        <Route path="home" component={ Home }/>
        <Route path="about" component={ About }/>
        <Route path="photos" component={ Portfolio } onEnter={ loadAlbums }/>
        <Route path="photos/:id" component={ Photos }  onEnter={ loadPhotos }/>
        <Route path="*" component={ NotFound }/>
    </Route>
);
