import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import routes from "./about.route";
import AboutController from "./about.controller";

const aboutComponent = angular
  .module("MyApp.about", [uiRouter])
  .config(routes)
  .controller("AboutController", AboutController).name;

export default aboutComponent;
