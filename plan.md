USING REDUX STATE

- Create actions/selectors/reducer.js for /feed [X]
- reducer.js => create reducer function, specifiy the cases and export it to rootReducer.js
  => Add initial state [X]

- actions.js => add action creator functions, specify type which will be used in the reducer.js
  => two action creators called startLoading and postsFetched [X]

- Dispatch actions from PostsFeed.js

- Inside selectors.js create different selectors for different pieces of data and import them in PostsFeed [X]

  => two selectors called selectFeedLoading and selectFeedPosts [X]

- In PostsFeed.js replace the useState hook with one or more selector usages [X]

---

FETCHING DATA WITH A THUNK
