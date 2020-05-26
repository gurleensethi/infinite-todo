import { UiState, UiActions, SHOW_MODAL } from "./ui.types";

const initialState: UiState = {
  dialogs: [],
};

const uiReducer = (state = initialState, action: UiActions): UiState => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        dialogs: [...state.dialogs, action.modalOptions],
      };
    default:
      return state;
  }
};

export default uiReducer;
