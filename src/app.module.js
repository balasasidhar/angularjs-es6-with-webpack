import './less/styles.less';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import homeComponent from './home';
import aboutComponent from './about'

angular.module('MyApp', [uirouter, homeComponent, aboutComponent])
    .config(routes);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

