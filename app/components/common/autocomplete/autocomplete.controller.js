/**
 * Created by e0000703 on 28/01/2016.
 */
class AutocompleteController {
  constructor() {
    this.term = '';
  }

  handleSearch(term) {
    return this.onSearch({term: term});
  }

}

export default AutocompleteController;
