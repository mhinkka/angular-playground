define([
    "console"
  , "angular"
  , "angular-resource"
], function (console, angular) {
  "use strict";
  console.debug("Creating app.services module...")
  return angular.module("app.services", ["ngResource"]);
});