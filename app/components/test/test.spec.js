import template from './test.tpl.jade';
import Controller from './test.controller';
import component from './index.js';

describe('when testing karma', () => {
  it('should report a successful test', () => {
    expect(true).toBeTruthy();
  });
});
