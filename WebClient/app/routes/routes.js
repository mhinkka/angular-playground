define([
    "console"
  , "../app"
  , "text!templates/object-list.html"
  , "text!templates/object-detail.html"
  , "text!templates/object-edit.html"
  , "text!templates/home.html"
], function (console, app, objectListTemplate, objectDetailTemplate, objectEditTemplate, homeTemplate) {
  console.debug("Initializing routing...");

  app.config(['$routeProvider', function ($routeProvider, session) {
    $routeProvider.
      when('/home', {
          controller: "HomeController"
        , template: homeTemplate
      }).
      when('/object/list', {
          controller: "ListController"
        , template: objectListTemplate
      }).
      when('/object/detail/:objectId', {
          controller: "DetailController"
        , template: objectDetailTemplate
      }).
      when('/object/edit/:objectId', {
          controller: "EditController"
        , template: objectEditTemplate
      }).
      when('/object/create', {
          controller: "EditController"
        , template: objectEditTemplate
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
})
