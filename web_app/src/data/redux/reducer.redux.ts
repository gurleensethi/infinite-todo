import { combineReducers } from "redux";
import { taskReducer } from "./task/task.reducer";
import uiReducer from "./ui/ui.reducer";

export default combineReducers({
  tasks: taskReducer,
  ui: uiReducer,
});
