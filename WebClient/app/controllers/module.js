define([
    "console"
  , "angular"
  , "angular-resource"
], function (console, angular) {
  "use strict";
  console.debug("Creating app.controllers module...")
  return angular.module("app.controllers", ["ngResource"]);
});