import {
  IErrorFactory,
  IErrorFactoryOptions,
} from "../interfaces/IErrorFactory";
import { NotFoundError, InvalidError } from "./customErrors";

class ErrorFactory implements IErrorFactory {
  public createError(
    errorOptions: IErrorFactoryOptions
  ): NotFoundError | InvalidError | Error {
    switch (errorOptions.type) {
      case "notfound":
        return new NotFoundError(errorOptions.name, errorOptions.message);

      case "invalid":
        return new InvalidError(errorOptions.name, errorOptions.message);
      default:
        return new Error("Internal server error!");
    }
  }
}

export default new ErrorFactory();
