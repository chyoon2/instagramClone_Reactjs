import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  postData: commentsReducer,
});
