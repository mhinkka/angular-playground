/*
define("app", ["angular", "angular-resource"], function(angular) {
    var app = angular.module("app", ["ngResource"] );
    // you can do some more stuff here like calling app.factory()...
    return app;
})
*/

define([
    "console"
  , "jquery"
  , "underscore"
  , "underscore.string"
  , "angular"
  , "angular-route"
  , "angular-gettext"
  , "./controllers/index"
  , "./directives/index"
  , "./services/index"
  , "./filters/index"
  , "./translations"
], function (console, $, _, _s, angular) {
    "use strict";

    var result = angular.module("app", [
        "ngRoute"
      , "app.controllers"
      , "app.directives"
      , "app.filters"
      , "app.services"
      , "gettext"
    ]);

    result.run(["$rootScope", "$location", "Session", "gettextCatalog", function ($rootScope, $location, session, gettextCatalog) {
      //let everthing know that we need to save state now.
      window.onbeforeunload = function (event) {
        $rootScope.$broadcast('savestate');
      };



      //---------------------------------------------------------------------------
      // Authentication and route mechanism based partly on methods described here:
      // http://arthur.gonigberg.com/2013/06/29/angularjs-role-based-auth/

      // enumerate routes that don't need authentication
      var routesThatDontRequireAuth = ["/home"];

      // check if current location matches route  
      var routeClean = function (route) {
        return _.find(routesThatDontRequireAuth,
          function (noAuthRoute) {
            return _s.startsWith(route, noAuthRoute);
          });
      };

      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // if route requires auth and user is not logged in
        if (!routeClean($location.url()) && !session.isAuthenticated()) {
          // redirect back to login
          $location.path('/home');
        }
      });

      $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
        // if route requires auth and user is not logged in
        if (!routeClean($location.url()) && !session.isAuthenticated()) {
          // redirect back to login
          $location.path('/login');
        }
      });
    }]);

    result.config(["$httpProvider", function ($httpProvider) {
      var logsOutUserOn401 = ['$q', '$location', function ($q, $location) {
        var success = function (response) {
          return response;
        };

        var error = function (response) {
          if (response.status === 401) {
            //redirect them back to login page
            $location.path('/home');

            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        };

        return function (promise) {
          return promise.then(success, error);
        };
      }];

      $httpProvider.responseInterceptors.push(logsOutUserOn401);
    }]);

    return result;
});
