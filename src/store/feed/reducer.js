const initialState = {
    loading: true,
    posts: [],
}

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_LOADING": {
        return {
          ...state, loading: action.payload
        };
      }
      case "POSTS_FETCHED": {
        return {
          ...state,
          posts: [...state.posts, ...action.payload]
        };
      }
      default: {
        return state;
      }
    }
  }