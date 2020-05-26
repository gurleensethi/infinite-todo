export const DELETE_ALL_TASKS_MODAL = "DELETE_ALL_TASKS_MODAL";

export interface DeleteAllTaskModalOptions {
  type: typeof DELETE_ALL_TASKS_MODAL;
  title: string;
  description: string;
}

export type ModalOptions = DeleteAllTaskModalOptions;
