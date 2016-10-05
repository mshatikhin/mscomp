// @flow

import "whatwg-fetch";

export const UPDATE_POST = 'UPDATE_POST';

export function updatePost(post: any) {
  return { type: UPDATE_POST, post };
}

export function postRequest(site: string, id: string) {
  return (dispatch: any) => {
    return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/${id}`)
      .then(response => response.json())
      .then((post) => dispatch(updatePost(post)))
      .catch(({ errors }) => dispatch(updatePost(null)));
  };
}
