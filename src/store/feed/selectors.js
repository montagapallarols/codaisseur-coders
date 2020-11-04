
// export const selectFeedLoading = reduxStore => {
//     return reduxStore.loading
//   }


// export const selectFeedPosts = reduxStore => {
//     return reduxStore.posts
//   }  => REMEMBER TO ACCESS THE APPROPRIATE REDUCER FROM COMBINED REDUCER!


export function selectFeedLoading(reduxState) {
    return reduxState.feed.loading;
  }
  
  export function selectFeedPosts(reduxState) {
    return reduxState.feed.posts;
  }