var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/Spec\.js$/).test(file);
});

requirejs.config({
  baseUrl: '/base/app',

  paths: {
    "test-init":        "../test/test-init"
  , "console":          "../scripts/console/console-min"
  , "jquery":           "../scripts/jquery-1.10.2"
  , "underscore":       "../scripts/underscore"
  , "underscore.string":"../scripts/underscore.string"
  , "angular":          "../scripts/angular"
  , "angular-resource": "../scripts/angular-resource"
  , "angular-route":    "../scripts/angular-route"
  , "angular-animate":  "../scripts/angular-animate"
  , "angular-gettext":  "../scripts/angular-gettext"
  , "angular-mocks":     "../scripts/angular-mocks"
  , "translations":     "translations"
  , "bootstrap":        "../scripts/bootstrap"
  , "modernizr":        "../scripts/modernizr-2.7.1"
  , "mxgraph":          "../scripts/mxgraph/js/mxClient"
  , "mxapplication":    "../scripts/mxgraph/js/mxApplication"
  }
  , shim: {
      "console": {
        "exports": "window.debug"
    }
    , "test-init": {
      "deps": ["console"]
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
      , "deps": ["test-init"]
    }
    , "angular-resource": {
      "deps": ["angular"]
    }
    , "angular-mocks": {
        "deps": ["angular-resource"]
      , "exports": "angularMocks"
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
    , "mxgraph": {
      "exports": "mxGraph",
      "init": function () {
        return {
          mxGraph: mxGraph,
          mxUtils: mxUtils,
          mxRubberband: mxRubberband,
          mxClient: mxClient,
          mxGraphModel: mxGraphModel,
          mxCodec: mxCodec
        }
      }
    }
    , "mxapplication": {
      "exports": "mxApplication",
      "deps": ["mxgraph"]
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});