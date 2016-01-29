import angular from 'angular';
import common from './common';
import searchWikipedia from './searchWikipedia';
import login from './login/login';

export default angular.module('app.components', [
  common.name,
  login.name,
  searchWikipedia.name
]);

