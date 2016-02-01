import angular from 'angular';
import autocomplete from './autocomplete/autocomplete';

export default angular.module('app.components', [
  autocomplete.name
]);
