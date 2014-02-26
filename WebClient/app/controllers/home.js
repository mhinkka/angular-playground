define([
    "console"
  , "underscore"
  , "./module"
], function (console, _, controllers) {
  'use strict';
  console.debug("Registering home controller...");
  controllers.controller(
    "HomeController",
    ["$scope", "Session", function ($scope, session) 
    {
      console.debug("Initializing home controller...");
      $scope.session = session;
    }
  ]);
}); 