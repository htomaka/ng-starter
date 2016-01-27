import './app.scss';
import template from './app.jade';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAria from 'angular-aria';
import components from './components';

export default angular.module('app', [
    uiRouter,
    ngAria,
    components.name
  ])
  .directive('app', () => (
  {
    restrict: 'E',
    scope: {},
    template,
    replace: true
  }
  ));
