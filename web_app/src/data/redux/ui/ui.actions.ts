import { ModalOptions, ModalType } from "src/data/types";
import {
  ShowModalAction,
  SHOW_MODAL,
  HideModalAction,
  HIDE_MODAL,
} from "./ui.types";

export const showModal = (modalOptions: ModalOptions): ShowModalAction => {
  return {
    modalOptions: modalOptions,
    type: SHOW_MODAL,
  };
};

export const hideModal = (modalType: ModalType): HideModalAction => {
  return {
    modalType,
    type: HIDE_MODAL,
  };
};
