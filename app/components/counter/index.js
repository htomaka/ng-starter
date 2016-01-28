import template from './counter.tpl.jade';
import angular from 'angular';
import controller from './counter.controller.js';

export default angular.module('app.components.counter', [])
  .directive('counter', () => (
  {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'counter',
    bindToController: true,
    replace: true
  }
  ));

