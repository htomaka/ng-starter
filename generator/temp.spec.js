import module from './{{name}}';
import Controller from './{{name}}.Controller';
import template from './{{name}}.tpl.jade';

describe('{{name}}', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // Controller specs
    it('has a name property', () => { // erase if removing this.name from the Controller
      let controller = makeController();
      expect(controller.name).toBeDefined();
    });
  });
});
