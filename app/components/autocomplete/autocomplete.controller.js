class AutocompleteController {
  constructor($scope) {
    this.results = [];

    $scope.$watch(() => {
      return this.getResults();
    }, newResults => {
      this.results = newResults;
    });
  }

  handleSearch(term) {
    return this.onSearch({term: term});
  }
}

AutocompleteController.$inject = ['$scope'];

export default AutocompleteController;
