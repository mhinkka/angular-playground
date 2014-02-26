define([
    "console"
  , "underscore"
  , "./module"
], function (console, _, controllers) {
  'use strict';
  console.debug("Registering header controller...")
  controllers.controller(
    "HeaderController",
    ["$scope", "$location", function ($scope, $location) {
      console.debug("Initializing header controller...");

      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      }
    }
  ]);
});