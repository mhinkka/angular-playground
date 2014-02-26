angular-playground
==================
A prototyping/seed/"playground" project for an "application" that uses the following tools, javascript libraries and frameworks:

###Runtime core libraries
- [AngularJS](http://angularjs.org/): Provides extensive framework for building [Single Page Applications](http://en.wikipedia.org/wiki/Single-page_application).
- [RequireJS](http://requirejs.org/): For providing a way of managing javascript file and module loading.
- [Bootstrap](http://getbootstrap.com/): Provides modern looking [responsive](http://en.wikipedia.org/wiki/Responsive_web_design) UI components and layouts.
- [jQuery](http://jquery.com/): For all kinds of tasks. Especially for DOM manipulation.
- [Underscore.js](http://underscorejs.org/): Provides lots of useful helper functions.
- [Underscore.string](http://epeli.github.io/underscore.string/): Extension for underscore.js-library that provides various useful string manipulation extensions.
- [angular-gettext](http://angular-gettext.rocketeer.be/): Angular module that provides [gettext](http://en.wikipedia.org/wiki/Gettext) support and thus brings [i18n](http://en.wikipedia.org/wiki/Internationalization_and_localization) system to be used by the application. This project itself contains translations to two languages: English and Finnish.

###Testing
- [Jasmine](http://pivotal.github.io/jasmine/): Behavior driven unit testing framework.
- [Karma](http://karma-runner.github.io/0.10/index.html): Running unit tests on several different browsers. Also for Continuous Integration testing. 
- [Protractor](https://github.com/angular/protractor): For [e2e](http://www.techopedia.com/definition/7035/end-to-end-test) testing Angular applications.

###Tools
- [Grunt](http://gruntjs.com/): Task runner for running build pre-/post processing tools.
- [Visual Studio 2013](http://www.visualstudio.com/): As development IDE (Optional: Simple project and solution files provided. Grunt is used for running actual build tasks).

###Grunt plugins (npms)
- [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less): Compiles [LESS](http://lesscss.org/) files into CSS files. LESS is an extension to CSS.
- [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs): For optimizing and uglifying project using [r.js](http://requirejs.org/docs/optimization.html).
- [grunt-angular-gettext](https://www.npmjs.org/package/grunt-angular-gettext): For extracting angular-gettext -texts from templates and generating .pot-files and in the other end, generating angular module containing text translations collected from multiple .po-files.
- [grunt-preprocess](https://github.com/jsoverson/grunt-preprocess): Simple system for doing various build configuration dependent tasks.
- [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine): For running jasmine unit tests (specs).
- [grunt-karma](https://github.com/karma-runner/grunt-karma): For running unit tests on several different browsers.
- [grunt-protractor-runner](https://www.npmjs.org/package/grunt-protractor-runner): For running protractor (e2e tests) from Grunt. 
