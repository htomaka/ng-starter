/**
 * @ngdoc directive
 * @name  app.components:autocomplete
 * @restrict 'E'
 * @description Example of a dumb component
 * @scope
 **/

import angular from 'angular';
import template from './autocomplete.tpl.jade';
import controller from './autocomplete.controller.js';

export default angular.module('app.components.autocomplete', [])
  .directive('autoComplete', () =>({
    restrict: 'E',
    scope: {
      onSearch: '&',
      // one-way data binding
      // see http://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html#replace-two-way-binding-with-one-way-binding
      getResults: '&results'
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }));
