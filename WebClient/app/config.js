﻿"use strict";

require.config({
    paths: {
      "console":          "../scripts/console/console"
    , "jquery":           "../scripts/jquery-1.10.2"
    , "text":             "../scripts/require-text"
    , "underscore":       "../scripts/underscore"
    , "underscore.string":"../scripts/underscore.string"
    , "angular":          "../scripts/angular"
    , "angular-resource": "../scripts/angular-resource"
    , "angular-route":    "../scripts/angular-route"
    , "angular-animate":  "../scripts/angular-animate"
    , "angular-gettext":  "../scripts/angular-gettext"
    , "translations":     "translations"
    , "bootstrap":        "../scripts/bootstrap"
    , "modernizr":        "../scripts/modernizr-2.7.1"
    }
  , shim: {
      "console": {
      "exports": "window.debug"
    }
    , "jquery": {
        "deps":    ["console"]
      , "exports": "$"
    }
    , "underscore": {
      "exports": "_"
    }
    , "underscore.string": {
        "exports": "_s"
      , "deps": ["underscore"]
    }
    , "angular": {
      "exports": "angular"
    }
    , "angular-resource": {
      "deps": ["angular"]
    }
    , "angular-route": {
      "deps": ["angular"]
    }
    , "angular-animate": {
      "deps": ["angular"]
    }
    , "angular-gettext": {
      "deps": ["angular"]
    }
    , "translations": {
      "deps": ["angular-gettext"]
    }
    , "bootstrap": {
      "deps": ["jquery"]
    }
    , "modernizr": {
      "exports": "Modernizr"
    }
  }
});

require([
    "require"
  , "console"
  , "jquery"
  , "underscore"
  , "angular"
  , "angular-animate"
  , "modernizr"
  , "bootstrap"
  , "app"
  , "routes/routes"
], function (require, console, $, _, angular, modernizr) {
    console.group("Bootstrap dependencies loaded.");
    console.debug("Console", console);
    console.debug("jQuery", $);
    console.debug("Underscore: ", _);
    console.debug("Angular: ", angular);
    console.debug("Modernizr: ", modernizr);

    console.debug("Bootstrapping document...")
    angular.bootstrap(window.document, ['app']);

    console.debug("Finalizing...")

    $("body").show();

    console.groupEnd();
});
