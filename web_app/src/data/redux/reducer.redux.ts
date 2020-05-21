import { combineReducers } from "redux";
import { taskReducer } from "./task/task.reducer";

export default combineReducers({
  tasks: taskReducer,
});
