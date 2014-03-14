angular-playground
==================
A prototyping/seed/"playground" project for an "application" that uses the following tools, javascript libraries and frameworks:

### Runtime core libraries
- [AngularJS](http://angularjs.org/): Provides extensive framework for building [Single Page Applications](http://en.wikipedia.org/wiki/Single-page_application).
- [RequireJS](http://requirejs.org/): For providing a way of managing javascript file and module loading.
- [Bootstrap](http://getbootstrap.com/): Provides modern looking [responsive](http://en.wikipedia.org/wiki/Responsive_web_design) UI components and layouts.
- [jQuery](http://jquery.com/): For all kinds of tasks. Especially for DOM manipulation.
- [Underscore.js](http://underscorejs.org/): Provides lots of useful helper functions.
- [Underscore.string](http://epeli.github.io/underscore.string/): Extension for underscore.js-library that provides various useful string manipulation extensions.
- [angular-gettext](http://angular-gettext.rocketeer.be/): Angular module that provides [gettext](http://en.wikipedia.org/wiki/Gettext) support and thus brings [i18n](http://en.wikipedia.org/wiki/Internationalization_and_localization) system to be used by the application. This project itself contains translations to two languages: English and Finnish.

### Testing
- [Jasmine](http://pivotal.github.io/jasmine/): Behavior driven unit testing framework.
- [Karma](http://karma-runner.github.io/0.10/index.html): Running unit tests on several different browsers. Also for Continuous Integration testing. 
- [Protractor](https://github.com/angular/protractor): For [e2e](http://www.techopedia.com/definition/7035/end-to-end-test) testing Angular applications.

### Tools
- [Grunt](http://gruntjs.com/): Task runner for running build pre-/post processing tools.
- [Visual Studio 2013](http://www.visualstudio.com/): As development IDE (Optional: Simple project and solution files provided. Grunt is used for running actual build tasks).

### Grunt plugins (npms)
- [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less): Compiles [LESS](http://lesscss.org/) files into CSS files. LESS is an extension to CSS.
- [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs): For optimizing and uglifying project using [r.js](http://requirejs.org/docs/optimization.html).
- [grunt-angular-gettext](https://www.npmjs.org/package/grunt-angular-gettext): For extracting angular-gettext -texts from templates and generating .pot-files and in the other end, generating angular module containing text translations collected from multiple .po-files.
- [grunt-preprocess](https://github.com/jsoverson/grunt-preprocess): Simple system for doing various build configuration dependent tasks.
- [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine): For running jasmine unit tests (specs).
- [grunt-karma](https://github.com/karma-runner/grunt-karma): For running unit tests on several different browsers.
- [grunt-protractor-runner](https://www.npmjs.org/package/grunt-protractor-runner): For running protractor (e2e tests) from Grunt. 


## Directory layout
---

    AngularPlayground.sln       -> Visual Studio-solution file for the project.
    install.sh                  -> Bash-shell script for building the project without Visual Studio.
    package.json                -> Information about the npm packages required to compile the solution. Used by npm to automatically
                                   download packages if needed.
    README.md                   -> angular-playground README-file.
    .nuget/                     -> Contains the configuration of NuGet-packages for Visual Studio
    WebClient/                  -> Directory for the actual project files. Also the root directory for the published web site.
      AngularPlayground.csproj  -> Visual Studio-project file.
      build.sh                  -> Bash script to build given configuration/task of the project without Visual Studio.
      e2e.conf.js               -> E2E test configuration file.
      favicon.ico               -> Application icon file.
      gruntfile.js              -> Grunt task runner file describing supported configurations/tasks.
      index.html                -> Automatically generated root html-file for the web site. Included into the
                                   repository in order to be able to easily test the optimized web site in naf.cs.hut.fi.
      install.sh                -> Bash script to both install all required npm packages and building the release version of the web site.
      karma.unit.conf.js        -> Unit test configuration file.
      package.json              -> Information about the npm packages required to run the project. Used by npm to automatically download 
                                   packages if needed.
      packages.config           -> Information about javascript libraries included into the project. Used by Visual Studio to download the
                                   packages from NuGet repositories if needed.
      setup.sh                  -> Bash script for installing npm packages required by the project.
      app-built/                -> Automatically created (if doesn't exist yet) directory for optimized javascript files. Included into the
                                   repository in order to be able to easily test the optimized web site in naf.cs.hut.fi.
        config.js               -> r.js optimized automatically generated javascript files.
      app/                      -> Directory for the actual web site implementation.
        controllers/            -> Directory for AngularJS [controllers](http://docs.angularjs.org/guide/controller) used in the
                                   application.
          detail.js             -> Controller for object details view.
          edit.js               -> Controller for object editor view.
          header.js             -> Controller for navigator controls. 
          home.js               -> Controller for home view.
          index.js              -> Directory indexer that forces all the controllers to be loaded.
          list.js               -> Controller for object list view.
          main.js               -> Topmost controller attached to the body of the main view.
          module.js             -> Defines angular module (app.controllers) consisting of all the controllers.
        directives/             -> Directory for AngularJS [directives](http://docs.angularjs.org/guide/directive) used in the application.
          index.js              -> Directory indexer that forces all the directives to be loaded.
          module.js             -> Defines angular module (app.directives) consisting of all the directives.
        filters/                -> Directory for AngularJS [filters](http://docs.angularjs.org/guide/filter) used in the application.
          index.js              -> Directory indexer that forces all the filters to be loaded.
          main.js               -> One simple (unused) filter example from AngularJS tutorial.
          module.js             -> Defines angular module (app.filters) consisting of all the filters.
        routes/                 -> Directory for AngularJS route definitions used in the application.
          routes.js             -> Angular.js route definition file. Maps URLs to controllers and templates.
        services/               -> Directory for AngularJS services, providers and factories used in the application.
          index.js              -> Directory indexer that forces all the services to be loaded.
          local.js              -> Service used to access and modify objects in "local" service. Initialized to contain data found in:
                                   WebClient/content/objects.js.
          module.js             -> Defines angular module (app.services) consisting of all the services.
          objectCache.js        -> Simple cache for storing objects into local storage.
          session.js            -> Session manager object that manages authentication session specific settings such as UI language and
                                   user information.
        templates/              -> Directory for AngularJS [templates](http://docs.angularjs.org/guide/templates) used in the application.
          home.html             -> HTML template for application's home-page.
          index.html            -> Master HTML template for the web site.
          object-detail.html    -> HTML template for object details view.
          object-edit.html      -> HTML template for object editor view.
          object-list.html      -> HTML template for object list view.
        app.js                  -> Main application module definition (app). Also ensures all required javascripts are loaded and
                                   angular modules registered during application startup. Also includes logic for redirecting 
                                   unauthenticated users back to home page.
        config.js               -> Third party javascript file configurations. Also includes the actual bootstrapping of AngularJS to the
                                   rendered page.
        translations.js         -> File automatically generated from gettext-tools from po-files. Included into the
                                   repository in order to be able to easily test the optimized web site in naf.cs.hut.fi.
      content/                  -> Directory for non-javascript (code) files required by the project. Includes images, less, css and 
                                   json-scripts etc. 
                                   Note: css files are automatically generated from less files, but they are included in order to be able to
                                   easily test the optimized web site in naf.cs.hut.fi.
        bootstrap/              -> Bootstrap-component related styles (less).
        app.less                -> Main stylesheet defition of the web site. Will generate app.css that is referenced by the web site.
        bootstrap*.css          -> Generated bootrap-component related styles (css).
      po/                       -> Directory for gettext (i18n) related files. Automatically generated from code but included into 
                                   repository as an example. Use e.g. [Poedit](http://www.poedit.net/)-editor to manage these.
        en_US.po                -> Gettext message catalog for English translations.
        fi_FI.po                -> Gettext message catalog for Finnish translations.
        template.pot            -> Automatically generated list of native texts to be translated extracted from javascript files.
        *.mo                    -> Automatically generated from translations.
      scripts/                  -> Directory for all the third-party javascript files.
      test/                     -> Directory for unit and E2E-test related files.
        e2e/                    -> Specs for E2E tests.
          controllerSpec.js     -> A couple of simple tests for testing login.
                                   any more.
        unit/                   -> Specs for E2E tests.
          controllerSpec.js     -> A couple of simple tests for testing login.
                                   any more.
        test-config.js          -> Configurations for running unit tests.
        test-init.js            -> Initialization script run before any tests.
          

## Setting up development environment for Visual Studio 2013
---

The following list contains the steps to set up the recommended development environment for QPR Entice WebClient.

1. Clone the project.
2. Install Visual Studio 2013.
3. Install node.js. Also install npm with the node.js installer (e.g. http://nodejs.org/download/)
4. Download TypeScript for Visual Studio 2013 (e.g. From http://www.microsoft.com/en-us/download/details.aspx?id=34790). This is step is required here just in order to be able to load the Visual Studio project file since it is actually a typescript web application-project.
5. Open project solution file in Visual Studio 2013.
6. Convert the solution to use IIS Express if you don't have any other web server available.
7. Build debug configuration. This will install all the other necessary components.
8. Run from Visual Studio (no need to attach debugger since we use debuggers in browsers).
9. If not using IIS Express, configure your web server to have a path pointing to angular-playground/WebClient-directory.


## Setting up system using bash-scripts.
---

1. Clone the project.
2. Run `install.sh` located in angular-playground root directory.
3. Configure your web server to have a path pointing to angular-playground/WebClient-directory.


## E2E Tests
---

In order to be able to run e2e-tests (in e2e configuration) using [Protractor](https://github.com/angular/protractor), you have to be able to start webdriver-manager inside selenium. After you have completed the steps above, it is enough to just the command:

    webdriver-manager start

The command above must be run in the directory to which npm has installed (while installing protractor) wedriver-manager command. E.g. in C:\Users\<user name>\AppData\Roaming\npm. 

For more information, see: https://www.npmjs.org/package/protractor
