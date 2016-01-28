import './app.scss';
import template from './app.jade';

import angular from 'angular';
import ngRedux from 'ng-redux';
import uiRouter from 'angular-ui-router';
import ngAria from 'angular-aria';

import components from './components';
import actions from './actions';
import rootReducer from './reducers'; // this is the application state

export default angular.module('app', [
    uiRouter,
    ngAria,
    ngRedux,
    components.name,
    actions.name
  ])
  .config(($ngReduxProvider) => {
    'ngInject';
    // create store which holds application state
    $ngReduxProvider.createStoreWith(rootReducer, []);
  })
  .directive('app', () => (
  {
    restrict: 'E',
    scope: {},
    template,
    replace: true
  }
  ));
