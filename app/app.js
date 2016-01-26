import './app.scss';
import template from './app.jade';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAria from 'angular-aria';
import componentsModule from './components/components';
import commonModule from './common/common';

angular.module('app', [
    uiRouter,
    ngAria,
    componentsModule.name,
    commonModule.name
  ])
  .directive('app', () => (
    {
      restrict: 'E',
      template
    }
));
