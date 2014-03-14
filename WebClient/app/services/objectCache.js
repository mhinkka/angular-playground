define([
    "console"
  , "underscore"
  , "./module"
  , "angular"
], function (console, _, services, angular) {
  console.debug("Registering object cache service...")

  services.factory("ObjectCacheService", ['$rootScope', function ($rootScope) {
    var service = {
        cache: null

      , SaveState: function () {
        localStorage.setItem("ObjectCache", angular.toJson(service.cache));
        console.debug("ObjectCache.SaveState", service.cache);
      }

      , RestoreState: function () {
        var tmp = localStorage.getItem("ObjectCache");
        service.cache = tmp ? angular.fromJson(tmp) : null;
        console.debug("ObjectCache.RestoreState", service.cache);
      }
    }

    $rootScope.$on("savestate", service.SaveState);

    service.RestoreState();
    return service;
  }]);
})
