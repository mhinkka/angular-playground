define([
    "console"
  , "angular"
  , "angular-resource"
], function (console, angular) {
  "use strict";
  console.debug("Creating app.directives module...")
  return angular.module("app.directives", ["ngResource"]);
});