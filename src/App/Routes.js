import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Photos from "../pages/Photos/Photos";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Post from "../pages/Post/Post";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route path="/" component={ Layout }>
            <IndexRedirect to="home"/>
            <Route path="blog" component={ Blog } />
            <Route path="blog/:id" component={ Post } />
            <Route path="home" component={ Home } />
            <Route path="about" component={ About } />
            <Route path="photos" component={ Portfolio } />
            <Route path="photos/:id" component={ Photos } />
            <Route path="*" component={ NotFound }/>
        </Route>
    )
}
