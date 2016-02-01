/**
 * @ngdoc directive
 * @name  app.components:autocomplete
 * @restrict 'E'
 * @description example of a dumb component
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
      getResults: '&results'
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }));
