import angular from 'angular';
import component from './{{name}}.component';

export default angular.module('app.components.{{name}}', [])
  // put route config here
  .directive('{{name}}', component);
