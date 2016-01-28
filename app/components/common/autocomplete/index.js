/**
 * Created by e0000703 on 28/01/2016.
 */
import angular from 'angular';
import template from './autocomplete.tpl.jade';
import controller from './autocomplete.controller';

export default angular.module('app.components.common.autocomplete', [])
  .directive('autoComplete', () =>({
    restrict: 'E',
    scope: {
      onSearch: '&',
      results: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }));
