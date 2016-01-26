import angular from 'angular';
import testComponent from './test.component';

let testModule = angular.module('test', [])
  .directive('test', testComponent);

export default testModule;
