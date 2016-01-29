class SearchWikipediaController {
  constructor(WikipediaService) {
    this.wikipediaService = WikipediaService;
    this.results = [];
  }

  searchWikipedia(term) {
    this.wikipediaService.getResults(term).then(() => {
      this.results = this.wikipediaService.results;
    });
  }
}

SearchWikipediaController.$inject = ['WikipediaService'];

export default SearchWikipediaController;
