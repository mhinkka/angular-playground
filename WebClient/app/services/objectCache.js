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
      , graphCache: null

      , SaveState: function () {
        localStorage.setItem("ObjectCache", angular.toJson(service.cache));

        if (service.graphSerializer)
          service.graphCache = service.graphSerializer();
        localStorage.setItem("GraphCache", angular.toJson(service.graphCache));
        console.debug("ObjectCache.SaveState", service.cache, service.graphCache);
      }

      , RestoreState: function () {
        var tmp = localStorage.getItem("ObjectCache");
        service.cache = tmp ? angular.fromJson(tmp) : null;
        tmp = localStorage.getItem("GraphCache");
        service.graphCache = tmp ? angular.fromJson(tmp) : null;
        console.debug("ObjectCache.RestoreState", service.cache, service.graphCache);
      }

      , graphSerializer: null

      , RegisterGraphSerializer: function (serializer) {
        service.graphSerializer = serializer;
      }

      , UnregisterGraphSerializer: function (serializer) {
        if (service.graphSerializer == serializer) {
          graphSerializer = null;
        }
      }
    }

    $rootScope.$on("savestate", service.SaveState);
    // $rootScope.$on("restorestate", service.RestoreState);
    service.RestoreState();

    return service;
  }]);
})
