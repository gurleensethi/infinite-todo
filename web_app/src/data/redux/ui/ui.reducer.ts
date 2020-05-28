import { UiState, UiActions, SHOW_MODAL, HIDE_MODAL } from "./ui.types";

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
    case HIDE_MODAL:
      return {
        ...state,
        modals: state.modals.filter((modal) => modal.type !== action.modalType),
      };
    default:
      return state;
  }
};

export default uiReducer;
