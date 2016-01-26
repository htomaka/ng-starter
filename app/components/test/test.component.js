/**
 * Created by e0000703 on 25/01/2016.
 */
import './test.scss';
import controller from './test.controller';
import template from './test.jade';

let testComponent = () => (
  {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }
);

export default testComponent;
