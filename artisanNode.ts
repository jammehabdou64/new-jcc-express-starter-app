import { getArgv } from "jcc-express-mvc/cli";
(async function () {
  await getArgv(process.argv);
  process.exit(0);
})();
