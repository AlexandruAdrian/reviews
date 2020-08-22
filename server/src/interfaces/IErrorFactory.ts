import { NotFoundError, InvalidError } from "../factories/customErrors";

export interface IErrorFactoryOptions {
  type: string;
  name: string;
  message: string;
}

export interface IErrorFactory {
  createError: (
    errorOptions: IErrorFactoryOptions
  ) => NotFoundError | InvalidError | Error;
}
