/**
 * @ngdoc directive
 * @name  app.containers:wikipediaSearch
 * @restrict 'E'
 * @description example of a smart component
 * @scope
 **/
import template from './searchWikipedia.tpl.jade';
import angular from 'angular';
import controller from './searchWikipedia.controller.js';

export default angular.module('app.containers.searchWikipedia', [])
  .directive('searchWikipedia', () => (
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

