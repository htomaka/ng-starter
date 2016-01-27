import angular from 'angular';
import mocks from 'angular-mocks';
import 'core-js/es5';
let context = require.context('./app/', true, /\.spec\.js/);
context.keys().forEach(context);
