import angular from "angular";
import AboutConfig from "./about.config";
import AboutCtrl from "./about.controller";

const aboutComponent = angular
  .module("about", [])
  .config(AboutConfig)
  .controller("AboutCtrl", AboutCtrl);

export default aboutComponent;
