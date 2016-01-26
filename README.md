# Angular ES6 Starter Kit for Java Applications

This repo serves as a starter kit for building large [AngularJS](https://angularjs.org/) apps. 
It features:
- [Webpack](http://webpack.github.io/) as its build system
- [Jade](http://jade-lang.com/) templating support
- [ES6](https://git.io/es6features) support via babel transpiler
- [Sass](http://sass-lang.com/) support
- Component-based architecture for scalability and smoother transition to [Angular 2](https://angular.io/)
- [Karma](https://karma-runner.github.io/0.13/index.html) / [Jasmine](http://jasmine.github.io/) test environment ready-to-go
 
 This kit is heavily-inspired from [NG6-starter](https://github.com/AngularClass/NG6-starter), the major difference is dropped dependency to [Gulp](http://gulpjs.com/) and uses NPM as its task-runner.

## Getting started

### Prerequisites

Check you have `node` and `npm` installed and add following packages as globals:

    npm i -g karma karma-cli webpack

### Installation

Clone or fork the repo then `npm install`

### Running the app

> Please note this project was created to run in a tomcat server. So there's no need to run a Node dev server. Simply drop the files in the `webapp` folder and start your server.

**Developpement**

Run `npm start`, which fires `webpack --watch` command under the hood. Configure your `web.xml` to use `/build` folder as its context.

**Production**

Run `npm build` to build an optimized package.
