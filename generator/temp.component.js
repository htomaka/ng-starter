import template from './{{name}}.tpl.jade';
import controller from './{{name}}.controller';
import './{{name}}.scss';

function {{name}}Component(){
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  }
}

export default {{name}}Component;
