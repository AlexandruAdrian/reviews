export class NotFoundError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

export class InvalidError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}
