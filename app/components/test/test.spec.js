/**
 * Created by e0000703 on 25/01/2016.
 */

import template from './test.jade';
import Controller from './test.controller';
import component from './test.js';

describe('Test', function() {
  var $rootScope;
  var makeController;

  beforeEach(window.module(component.name));
  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function() {
      return new Controller();
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('should have a title property', function() { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller.title).toBeDefined();
    });
  });
});
