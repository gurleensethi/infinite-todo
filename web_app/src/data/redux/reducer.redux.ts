import { combineReducers } from "redux";
import { taskReducer } from "./task/task.reducer";

const reducer = combineReducers({
  tasks: taskReducer,
});

export default reducer;
