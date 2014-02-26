define([
    "console"
  , "jquery"
  , "underscore"
  , "./module"
  , "services/session"
  , "bootstrap"
], function (console, $, _, controllers, session) {
  'use strict';
  console.debug("Registering main controller...");
  controllers.controller(
    "MainController",
    ["$scope", "$location", "ObjectCacheService", "LocalService", "Session", "gettext", function ($scope, $location, objectCache, service, session, gettext) {
      console.debug("Initializing main controller...");

      $scope.session = session;

      $scope.userName = $("#userName").val();
      $scope.userPassword = $("#userPassword").val();

      if (session.isAuthenticated())
        $scope.userName = session.data.userName;

      $scope.loginUser = function()
      {
        session.authenticate($scope.userName, $scope.userPassword, null, function () {
          $scope.modalTitleText = gettext("Login failed!");
          $scope.modalBodyText = gettext("Incorrect user name or password was given.");
          $("#myModal").modal();
        });
      }

      $scope.logoutUser = function () {
        $scope.session.reset();
        $location.path("/home");
      }
    }
  ]);
});