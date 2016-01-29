class AutocompleteController {
  constructor() {
    this.term = '';
  }

  handleSearch(term) {
    return this.onSearch({term: term});
  }

}

export default AutocompleteController;
