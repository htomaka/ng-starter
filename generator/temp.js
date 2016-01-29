import angular from 'angular';
import template from './{{name}}.tpl.jade';
import controller from './{{name}}.controller';
import './{{name}}.scss';

export default angular.module('app.{{type}}s.{{name}}', [])
  // put route config here
  .directive('{{name}}', () =>({
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }));
