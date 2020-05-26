import { ModalOptions } from "src/data/types";
import { ShowModalAction, SHOW_MODAL } from "./ui.types";

export const showDialog = (modalOptions: ModalOptions): ShowModalAction => {
  return {
    type: SHOW_MODAL,
    modalOptions: modalOptions,
  };
};
