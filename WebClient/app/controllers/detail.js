define([
    "console"
  , "underscore"
  , "./module"
], function (console, _, controllers) {
  'use strict';
  console.debug("Registering detail controller...");
  controllers.controller(
    "DetailController",
    ["$scope", "$routeParams", "$location", "ObjectCacheService", "LocalService", function ($scope, $routeParams, $location, objectCache, service) 
    {
      console.debug("Initializing object detail controller...");
      $scope.objectId = $routeParams.objectId;

      service.getCached({ objectId: $routeParams.objectId }, function (data) {
        data = data.result;
        $scope.object = _.find(data, function (item) { return item.data.id == $routeParams.objectId; });
        console.debug("Object detail", $scope.object);
      });

      $scope.edit = function () {
        $location.path("/object/edit/" + $scope.object.data.id);
      }

      $scope.delete = function () {
        service.delete($scope.object.data.id);
        $location.path("/object/list");
      }
    }
  ]);
}); 