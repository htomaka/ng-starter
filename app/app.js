import 'normalize.css';
import './app.scss';
import template from './app.jade';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAria from 'angular-aria';

import components from './components/compoents';
import containers from './containers/containers';
import shared from './shared/shared';

export default angular.module('app', [
    uiRouter,
    ngAria,
    components.name,
    containers.name,
    shared.name
  ])
  .directive('app', () => (
  {
    restrict: 'E',
    scope: {},
    template,
    replace: true
  }
  ));
