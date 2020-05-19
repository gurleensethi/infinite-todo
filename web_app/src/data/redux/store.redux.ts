import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer.redux";
import thunk from "redux-thunk";
import ServiceLocator from "src/data/services/service-locator";
import { TaskService } from "../services/task.service";
import { AppThunkMiddleware } from "../types";

const serviceLocator = new ServiceLocator();
serviceLocator.registerLazySingleton(TaskService, () => new TaskService());

export const createAppStore = () => {
  return createStore(
    reducer,
    applyMiddleware(
      thunk.withExtraArgument(serviceLocator) as AppThunkMiddleware
    )
  );
};
