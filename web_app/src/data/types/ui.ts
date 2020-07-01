export const DELETE_ALL_TASKS_MODAL = "DELETE_ALL_TASKS_MODAL";
export const SETTINGS_MODAL = "SETTINGS_MODAL";
export const EDIT_TASK_MODAL = "EDIT_TASK_MODAL";

export interface BaseModalOptions {}

export interface DeleteAllTaskModalOptions extends BaseModalOptions {
  type: typeof DELETE_ALL_TASKS_MODAL;
}

export interface SettingsModalOptions extends BaseModalOptions {
  type: typeof SETTINGS_MODAL;
}

export interface EditTaskModalOptions extends BaseModalOptions {
  type: typeof EDIT_TASK_MODAL;
}

export type ModalOptions = DeleteAllTaskModalOptions | SettingsModalOptions;

export type ModalType =
  | typeof DELETE_ALL_TASKS_MODAL
  | typeof SETTINGS_MODAL
  | typeof EDIT_TASK_MODAL;
