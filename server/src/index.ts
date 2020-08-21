import { App } from "./App";

const app = new App();

app.enableMiddleware();
app.enableRoutes();
app.startApp();
