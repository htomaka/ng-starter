import angular from 'angular';
import Test from './test/test';

let componentsModule = angular.module('components', [Test.name]);

export default componentsModule;
