/**
 * Created by e0000703 on 28/01/2016.
 */
import template from './searchWikipedia.tpl.jade';
import angular from 'angular';
import controller from './searchWikipedia.controller.js';

export default angular.module('app.components.searchWikipedia', [])
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

