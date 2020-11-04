import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
    return {
        type: "START_LOADING_POST"
      };
}

export function postFullyFetched(data) {
    return {
        type: "POST_FULLY_FETCHED",
        payload: data
      };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`)
    ]);

    console.log("Post response", postResponse.data)
    console.log("Comments Response", commentsResponse.data)

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data
      })
    );
  };
}