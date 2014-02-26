define([
    "console"
  , "underscore"
  , "./module"
], function (console, _, controllers) {
  'use strict';
  console.debug("Registering edit controller...")
  controllers.controller(
    "EditController",
    ["$scope", "$routeParams", "$location", "ObjectCacheService", "LocalService", function ($scope, $routeParams, $location, objectCache, service) {
      console.debug("Initializing object edit controller...");

      $scope.objectId = $routeParams.objectId;
      $scope.creatingNew = !$routeParams.objectId;

      service.getCached({ objectId: $routeParams.objectId }, function (data) {
        data = data.result;
        $scope.object = _.find(data, function (item) { return item.data.id == $routeParams.objectId; });
        if (!$scope.object) {
          $scope.object = {
            "data": {
              "id": Math.floor(Math.random() * 10000000).toString(),
              "title": "",
              "url": "",
              "thumbnailurl": "",
            }
          }
          $scope.objectId = $scope.object.data.id;
        }
        console.debug("Editing object", $scope.object);

        $scope.cancel = function () {
          if ($scope.creatingNew)
            $location.path("/object/list");
          else
            $location.path("/object/detail/" + $scope.object.data.id);
        }

        $scope.save = function () {
          service.update({ objectId: $scope.object.data.id }, $scope.object.data);
          if ($scope.creatingNew)
            $location.path("/object/list");
          else
            $location.path("/object/detail/" + $scope.object.data.id);
        }
      });
    }
  ]);
});