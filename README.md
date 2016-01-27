# Angular ES6 Starter Kit

This repo serves as a starter kit for building large [AngularJS](https://angularjs.org/) apps.
It features:
- [Webpack](http://webpack.github.io/) as its build system
- [Jade](http://jade-lang.com/) templating support
- [ES6](https://git.io/es6features) support via babel transpiler
- [Sass](http://sass-lang.com/) support
- Component-based architecture for scalability and smoother transition to [Angular 2](https://angular.io/)
- [Karma](https://karma-runner.github.io/0.13/index.html) / [Jasmine](http://jasmine.github.io/) a ready-to-go test environment

 This kit is heavily-inspired from [NG6-starter](https://github.com/AngularClass/NG6-starter), the major difference is dropped dependency to [Gulp](http://gulpjs.com/) and uses NPM as its task-runner.

## Getting started

### Prerequisites

Check you have `node` and `npm` installed.

### Installation

Clone or fork the repo then `npm install`

### Running the app

####Developement

Run `npm run start` which fired a developpement server with live reload.

####Production

Run `npm run build` to build an optimized package for production.

## File Structure

    app/
    	assets/ -> images, fonts etc.
    	components/
	    	common/ -> reusable components such as header, footer or ui widgets
	    	feature1/
		    	index.js -> component definition
		    	feature1.tpl.jade -> component template
		    	feature1.scss -> component specific styles
		    	feature1.spec.js -> component tests
		    index.js -> components entry file
    	shared/ -> Shared ressources such as factories, filters, helpers etc.
    	app.tpl.jade -> main layout template we use jade but feel free to use html
	    app.scss -> layout styles
	    index.js -> app entry point and top-level component
    build/ -> production code to deploy
    	index.html

Your application is a tree of components (directives). Every element in your ui is treated as a small focused component with it own logic, styles and markup. This architecture favors reusability, ease of maintenance and testability.

## Testing

This package comes with a ready-to-go testing environment. Default configuration features Karma, Jasmine and PhantomJS which plays well with CI. Be sure to use the `*.spec.js` naming convention for your test files.

Run `npm run test` to run the tests.





