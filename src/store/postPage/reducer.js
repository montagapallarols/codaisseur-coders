const initialState = {
    loading: true,
    post: null,
    comments: []
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "START_LOADING_POST": {
            return {
                loading: true,
                post: null,
                comments: []
            }
        }
        case "POST_FULLY_FETCHED": {
            return {
                loading: false,
                post: action.payload.post,
                comments: action.payload.comments
            }
        }
      default: {
        return state;
      }
    }
  }