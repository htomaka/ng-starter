class CounterController {
  constructor($scope, $ngRedux, counterActions) {

    let unsubscribe = $ngRedux.connect(
      state => ({
        counter: state.counter
      })
    )(this);
    $scope.$on('$destroy', unsubscribe);

    this.increment = counterActions.increment;
    this.decrement = counterActions.decrement;
    this.reset = counterActions.reset;
  }
}

CounterController.$inject = ['$scope', '$ngRedux', 'counterActions'];

export default CounterController;
