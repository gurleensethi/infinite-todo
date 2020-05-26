import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.redux";
import thunk from "redux-thunk";
import ServiceLocator from "src/data/services/service-locator";
import { TaskService } from "../services/task.service";
import { AppThunkMiddleware } from "../types";

const serviceLocator = new ServiceLocator();
serviceLocator.registerLazySingleton(TaskService, () => new TaskService());

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument(serviceLocator) as AppThunkMiddleware
      )
    )
  );
};
