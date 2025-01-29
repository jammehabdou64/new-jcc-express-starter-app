import { ConsoleKernel } from "jcc-express-mvc/cli";
import { app } from "jcc-express-mvc/Dependency";

app.bind<ConsoleKernel>("ConsoleKernel", () => new ConsoleKernel());

export { app };
