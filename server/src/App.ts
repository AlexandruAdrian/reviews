import express from "express";
import cors from "cors";
import helmet from "helmet";
import reviewRoutes from "./routes/reviewRoutes";
import errorHandler from "./middlewares/errorHandler";

export class App {
  public app: express.Application;
  public port: number | string;

  constructor() {
    this.app = express();
    this.port = 3000;
  }

  public enableMiddleware(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  public enableRoutes(): void {
    this.app.use(reviewRoutes());
  }

  public enableErrorHandler(): void {
    this.app.use(errorHandler);
  }

  public startApp(): void {
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }
}
