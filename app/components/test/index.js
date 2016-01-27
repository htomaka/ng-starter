import './test.scss';
import template from './test.tpl.jade';

import angular from 'angular';
import controller from './test.controller';

export default angular.module('app.components.test', [])
  .directive('test', () => (
  {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }
  ));

