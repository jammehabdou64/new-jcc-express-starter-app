import { UsersController } from "@Controllers/UsersController";
import { Auth } from "jcc-express-mvc/";
import { Route } from "jcc-express-mvc/Core";

Route.get("/", (req, res) => {
  return res.render("index", {
    users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
  });
});

Route.middleware("guest").get("/login", (req, res) => res.render("auth/login"));

Route.middleware("guest").get("/register", (req, res) =>
  res.render("auth/register"),
);

Route.middleware("auth").get("/home", (req, res, next) => {
  return res.render("home");
});

Route.prefix("/auth").group((Route) => {
  Route.post("/login", Auth.attempt);
  Route.post("/register", [UsersController, "store"]);
});

Route.get("/logout", Auth.logout);
