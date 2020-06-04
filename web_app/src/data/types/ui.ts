export const DELETE_ALL_TASKS_MODAL = "DELETE_ALL_TASKS_MODAL";

export interface BaseModalOptions {}

export interface DeleteAllTaskModalOptions extends BaseModalOptions {
  type: typeof DELETE_ALL_TASKS_MODAL;
  title: string;
  description: string;
  isFullScreenMobile?: boolean;
}

export type ModalOptions = DeleteAllTaskModalOptions;
