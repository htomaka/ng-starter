import angular from 'angular';
import common from './common';
import searchWikipedia from './searchWikipedia';

export default angular.module('app.components', [
  common.name,
  searchWikipedia.name
]);

