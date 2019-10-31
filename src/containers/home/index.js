import angular from 'angular';
import uiRouter from "@uirouter/angularjs";
import routes from './home.route';
import HomeController from './home.controller';

const homeComponent = angular.module('MyApp.home', [uiRouter])
    .config(routes)
    .controller('HomeController', HomeController)
    .name;

export default homeComponent;