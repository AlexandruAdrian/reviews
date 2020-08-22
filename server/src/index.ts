import { App } from "./App";

const app = new App();

app.enableMiddleware();
app.enableRoutes();
app.enableErrorHandler();
app.startApp();
