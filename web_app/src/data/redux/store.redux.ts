import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer.redux";
import thunk from "redux-thunk";

export const createAppStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
