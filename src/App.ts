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

  public enableMiddleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  public startApp() {
    this.app.listen((PORT) => console.log(`Listening on port ${this.port}`));
  }
}
