import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;


export function setLoading(loading) {
    return {
      type: "SET_LOADING",
      payload: loading
    };
  }

  export function postsFetched(posts) {
    return {
      type: "POSTS_FETCHED",
      payload: posts
    };
  }


  export async function fetchNext5Posts(dispatch, getState) {
    dispatch(setLoading(true));

    const offset = getState().feed.posts.length;

    const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`)
    // console.log("More posts", response.data.rows)
    const morePosts = response.data.rows


    dispatch(postsFetched(morePosts));
  }

