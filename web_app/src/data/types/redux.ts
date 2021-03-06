import { ThunkAction, ThunkMiddleware, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import ServiceLocator from "src/data/services/service-locator";
import { TaskState } from "../redux/task/task.types";
import { UiState } from "../redux/ui/ui.types";

export type RootState = {
  tasks: TaskState;
  ui: UiState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ServiceLocator, // Extra argument
  Action<string>
>;

export type AppThunkMiddleware = ThunkMiddleware<
  RootState,
  Action<string>,
  ServiceLocator
>;

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  ServiceLocator,
  Action<string>
>;
