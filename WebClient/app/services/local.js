define([
    "console"
  , "underscore"
  , "./module"
], function (console, _, services) {
  console.debug("Registering local service...")

  services.factory('LocalService', ['$resource', 'ObjectCacheService',
    function ($resource, objectCache) {
      var service = $resource("content/objects.js?:objectId", {}, {
          'query': {
          method: 'GET',
          params: { objectId: 'objects' },
          isArray: true,
          cache: true
        }
        , 'update': {
          method: 'PUT',
          params: { objectId: 'objectId' }
        }
      });

      var cache;
      service.getCached = function (parameters, callback) {
        if (objectCache.cache) {
          console.debug("Using cache...");
          if (callback)
            callback(objectCache.cache);
        }
        else if (cache && cache.$resolved) {
          objectCache.cache = cache;
          callback(cache);
        }
        else {
          console.debug("Not using cache...");
          cache = service.get(callback);
        }
      };
      service.update = function (parameters, data) {
        var object = _.find(objectCache.cache.result, function (item) { return item.data.id == parameters.objectId; });
        if (!object)
        {
          console.debug(data);
          objectCache.cache.result = objectCache.cache.result.concat([{ "data": data }]);
        }
      };
      service.delete = function (objectId) {
        objectCache.cache.result = _.filter(objectCache.cache.result, function (item) {
          return item.data.id != objectId;
        });
      };
      service.resetCache = function (callback) {
        objectCache.cache = null;
        objectCache.SaveState();
        console.debug("Reloading cache...");
        service.get(function (cache) {
          objectCache.cache = cache;
          callback(cache);
        });
      };
      return service;
    }]);
})
