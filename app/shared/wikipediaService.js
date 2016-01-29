import angular from 'angular';
import _ from 'lodash';

function WikipediaService($http) {
  let results = [];
  function getResults(term) {
    return $http({
      url: 'http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK',
      method: 'jsonp',
      params: {
        action: 'opensearch',
        search: encodeURI(term),
        format: 'json'
      }
    })
      .then(results => {
        angular.copy(results.data[1], this.results);
      });
  }

  return {
    results,
    getResults
  };
}

WikipediaService.$inject = ['$http'];

export default angular.module('app.shared.wikipediaService', [])
  .factory('WikipediaService', WikipediaService);
