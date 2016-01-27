class TestController {
  constructor($http) {
    this.title = 'It works!';
    this.$http = $http;
    this.getList();
  }

  getList() {
    this.$http.get('/api/test').then((response) => console.log(response));
  }
}

TestController.$inject = ['$http'];

export default TestController;
