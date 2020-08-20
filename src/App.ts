import express from "express";
import cors from "cors";
import helmet from "helmet";

export class App {
  public app: express.Application;
  public port: number | string;

  constructor() {
    this.app = express();
    this.port = 8000;
  }

  public enableMiddleware(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  public startApp(): void {
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }
}
