import { ThunkAction } from "redux-thunk";
import reducer from "../redux/reducer.redux";
import { Action } from "redux";
import ServiceLocator from "src/data/services/service-locator";

export type RootState = ReturnType<typeof reducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ServiceLocator, // Extra argument
  Action<string>
>;
