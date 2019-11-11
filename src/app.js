import angular from "angular";
import "@uirouter/angularjs";

import "./theme/styles.scss";

import AppConfig from "./app.config";
import "./containers/home";
import "./containers/about";

const requires = ["ui.router", "home", "about"];

window.app = angular.module("app", requires).config(AppConfig);

angular.bootstrap(document.getElementById("app"), ["app"]);

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
