define([
    "console"
  , "jquery"
  , "underscore"
  , "./module"
  , "services/session"
], function (console, $, _, controllers, session) {
  'use strict';
  console.debug("Registering object list controller...");
  controllers.controller(
    "ListController",
    ["$scope", "$location", "ObjectCacheService", "LocalService", "Session", "gettext", function ($scope, $location, objectCache, service, session, gettext) {
      console.debug("Initializing object list controller...");

      function queryResultToObjects(data)
      {
        data = data.result;
        $scope.objects = _.filter(data, function (item) { return item.data.thumbnail && item.data.thumbnail !== "default" && item.data.thumbnail !== "self"; });
        console.debug("Object list objects", $scope.objects);
      }

      service.getCached({}, function (data) {
        queryResultToObjects(data);
      });

      $scope.orderProp = "data.title"

      $scope.createNew = function ()
      {
        $location.path("/object/create");
      }

      $scope.resetCache = function () {
        service.resetCache(function (data) {
          queryResultToObjects(data);
        });
      }
    }
  ]);
});