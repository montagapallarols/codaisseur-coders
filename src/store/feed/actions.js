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