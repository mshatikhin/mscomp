// @flow

import "whatwg-fetch";

export const UPDATE_BLOG = 'UPDATE_BLOG';

export function updateBlog(blog: any) {
    return { type: UPDATE_BLOG, blog };
}

export function blogRequest(site: string) {
    return (dispatch: any) => {
        return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/`)
          .then(response => response.json())
          .then((blog) => dispatch(updateBlog(blog)))
          .catch(({ errors }) => dispatch(updateBlog(null)));
    };
}
