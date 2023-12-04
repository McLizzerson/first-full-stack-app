class NotFoundError extends Error {
  constructor(sourceType, id) {
    super(`Resource type: ${sourceType} with id: ${id} was not found!`);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;
