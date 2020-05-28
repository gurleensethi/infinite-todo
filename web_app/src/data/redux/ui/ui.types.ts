import { ModalOptions } from "src/data/types";

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
  modalOptions: ModalOptions;
}

export interface HideModalAction {
  type: typeof HIDE_MODAL;
}

export interface UiState {
  modals: ModalOptions[];
}

export type UiActions = ShowModalAction | HideModalAction;
