import AppDispatcher from "../dispatcher/AppDispatcher";
import Constants from "../constants/Constants";

class BlogStatic {

    getBlog($site) {
        $.getJSON("https://public-api.wordpress.com/rest/v1.1/sites/" + $site + "/posts/", (data) => {
            AppDispatcher.dispatch({
                type: Constants.UPDATE_BLOG,
                content: data.posts
            });
        });
    }
}

var actions = new BlogStatic();
export default actions;
