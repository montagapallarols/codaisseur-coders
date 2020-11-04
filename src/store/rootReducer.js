import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";

const rootReducer = combineReducers({
  feed: feedReducer

});

export default rootReducer;
