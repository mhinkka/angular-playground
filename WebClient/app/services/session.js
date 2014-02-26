define([
    "console"
  , "underscore"
  , "./module"
  , "angular"
  , "angular-gettext"
  , "translations"
], function (console, _, services) {
  console.debug("Registering session service...")

  services.factory("Session", ["$resource", "$http", "$rootScope", "gettextCatalog", 
    function ($resource, $http, $rootScope, gettextCatalog) {
      var Session = {
          data: null

        , isAuthenticated: function () {
          return Session.data.authenticated;
        }

        , authenticate: function (userName, userPassword, success, failure) {
/*
          $http.get("<insert authentication url here>" + userName + "/" + userPassword)
            .then(function (response) {
              if (!response.data || (response.data === "Failed!")) {
                Session.reset();
                failure();
              }
              else {
                Session.data.userName = userName;
                Session.data.authenticated = true;
                Session.data.sessionId = response.data;
                if (success)
                  success();
              }
            }, function (response) {
              Session.reset();
              failure();
            });
*/
          if (userName == "test" && userPassword == "test")
            response = { "data": "session-id" };
          else
            response = { };
         
          if (!response.data || (response.data === "Failed!")) {
            Session.reset();
            failure();
          }
          else {
            Session.data.userName = userName;
            Session.data.authenticated = true;
            Session.data.sessionId = response.data;
            if (success)
              success();
          }
        }

        , reset: function () {
          Session.data = {
            authenticated: false,
            userName: null,
            sessionId: null,
            language: "en_US"
          };
          return Session;
        }

        , saveState: function () {
          sessionStorage.setItem("Session", angular.toJson(Session.data));
          console.debug("Session.saveState", Session.data);
        }

        , restoreState: function () {
          var tmp = sessionStorage.getItem("Session");
          Session.data = tmp ? angular.fromJson(tmp) : null;

          if (!Session.data)
            Session.reset();
          gettextCatalog.currentLanguage = Session.data.language;
          console.debug("Session.restoreState", Session.data, Session.data.language);
          return Session;
        }

        , getCurrentLanguage: function () {
          return gettextCatalog.currentLanguage;
        }

        , setCurrentLanguage: function (newLanguage) {
          gettextCatalog.currentLanguage = Session.data.language = newLanguage;
          console.debug("Language changed to: " + newLanguage);
        }
      }

      gettextCatalog.debug = true;

      $rootScope.$on("savestate", Session.saveState);

      return Session.restoreState();
    }]);
})
