import "./theme/styles.scss";
import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import routes from "./config/routes";
import homeComponent from "./containers/home";
import aboutComponent from "./containers/about";

angular
  .module("MyApp", [uiRouter, homeComponent, aboutComponent])
  .config(routes);

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
