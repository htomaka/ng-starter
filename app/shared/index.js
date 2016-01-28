import angular from 'angular';
import wikipediaService from './wikipediaService';

export default angular.module('app.shared', [
  wikipediaService.name
]);

