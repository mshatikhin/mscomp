import AppDispatcher from "../dispatcher/AppDispatcher";
import Constants from "../constants/Constants";

class BlogStatic {

    getBlog(site) {
        $.getJSON(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/`, (data) => {
            AppDispatcher.dispatch({
                type: Constants.UPDATE_BLOG,
                content: data.posts
            });
        });
    }

    getPost(site, id) {
        $.getJSON(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/${id}`, (data) => {            
            AppDispatcher.dispatch({
                type: Constants.UPDATE_POST,
                content: data
            });
        });
    }
}

var actions = new BlogStatic();
export default actions;
