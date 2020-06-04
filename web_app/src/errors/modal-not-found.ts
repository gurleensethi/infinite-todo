export default class ModalNotFoundError extends Error {
  constructor(modalType: String) {
    super(`Modal of type '${modalType}' not found!`);
  }
}
