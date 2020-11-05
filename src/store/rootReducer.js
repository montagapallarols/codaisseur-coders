import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  feed: feedReducer,
  postPage: postPageSliceReducer,
  auth:  authReducer
});

export default rootReducer;
