# Future-proof AngularJS starter kit

This repo serves as a starter kit for building large [AngularJS](https://angularjs.org/) apps.
It features:
- [Webpack](http://webpack.github.io/) as its build system
- [Jade](http://jade-lang.com/) templating support
- [ES6](https://git.io/es6features) support via babel transpiler
- [Sass](http://sass-lang.com/) support
- Component-based architecture for scalability and smoother transition to [Angular 2](https://angular.io/)
- [Karma](https://karma-runner.github.io/0.13/index.html) / [Jasmine](http://jasmine.github.io/) a ready-to-go test environment

 This kit is heavily-inspired from [NG6-starter](https://github
 .com/AngularClass/NG6-starter), the major difference is dropped dependency
 to [Gulp](http://gulpjs.com/) for automation. Use NPM instead.

## Getting started

### Prerequisites

Check you have `node` and `npm` installed.
Install these globals `npm install -g webpack phantomjs karma karma-cli`

### Installation

Clone or fork the repo then `npm install`

### Running the app

####Developement

Run `npm run start` which fires a developpement server with hot reload.

####Production

Run `npm run build` to build an optimized package for production.

## File Structure

    app/
    	assets/ -> images, fonts etc.
    	components/ -> presentational components
    	containers/ -> smart components
	    	feature1/
		    	feature1.js -> module and directive definition object
		    	feature1.tpl.html -> component template
		    	feature1.scss -> component specific styles
		    	feature1.spec.js -> component tests
		    containers.js -> components entry file
    	shared/ -> Shared ressources such as factories, filters, helpers etc.
    	app.tpl.html -> application shell
	    app.scss -> global styles
	    app.js -> app entry point and top-level component
    build/ -> production code to deploy
    	index.html

Imagine your application as a tree of components (directives). Every element in the UI is treated as a small focused component with it own logic, styles and markup. This architecture favors reusability, ease of maintenance and testability.

> Notice we use two types of components:
>
> **Containers** also called *smart components* are responsible to pass data back and forth between store and views. Theses are not easily reusables and are often bound to a route.
>
> **Components** also called *dumb components* are essentially UI elements which are unaware of application domain model. They get data in through bindings and get data out through callbacks.

## Testing

This package comes with a ready-to-go testing environment. Default configuration features Karma, Jasmine and PhantomJS which plays well with CI. Be sure to use the `*.spec.js` naming convention for your test files.

Run `npm run test` to run the tests.

## Generator

All components follow the same structure. We automated creation of component folders with a light Yeoman-like generator built with [Plop](https://github.com/amwmedia/plop).

To create a new component, run `npm run generator` and follow instructions on screen.
Available options are `type ['component', 'container']` and `name`

## Documentation

Documentation is generated with [angular-jsdoc](https://github.com/allenhwkim/angular-jsdoc)

Run `npm run docs`

## Todo

- E2E tests integration with protractor
- Optimize Webpack config, production bundle




