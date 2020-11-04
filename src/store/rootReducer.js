import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";

const rootReducer = combineReducers({
  feed: feedReducer,
  postPage: postPageSliceReducer
});

export default rootReducer;
