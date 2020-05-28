import { UiState, UiActions, SHOW_MODAL } from "./ui.types";

const initialState: UiState = {
  modals: [],
};

const uiReducer = (state = initialState, action: UiActions): UiState => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modals: [...state.modals, action.modalOptions],
      };
    default:
      return state;
  }
};

export default uiReducer;
