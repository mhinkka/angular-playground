define([
    "console"
  , "angular"
  , "app"
  , "services/session"
  , "angular-mocks"
  , "controllers/index"
], function (console, angular) {
  'use strict';

  describe('Controllers', function () {
    var $httpBackend, $controller, $rootScope, session;

    beforeEach(module("app"));

    beforeEach(inject(function ($injector) {
      // Set up the mock http service responses
      $httpBackend = $injector.get('$httpBackend');
      // Get hold of a scope (i.e. the root scope)
      $rootScope = $injector.get('$rootScope');
      // The $controller service is used to create instances of controllers
      $controller = $injector.get('$controller');

      session = $injector.get('Session');
      session.reset();
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });


    describe('MainController', function () {
      var scope, mainController;
      var serviceUrl = "<insert authentication url here>", testSessionId = "f00f00f0-0f00-f00f-00f0-0f00f00f00ba";

      beforeEach(inject(function ($injector) {
        scope = $rootScope.$new;
        mainController = $controller("MainController", { "$scope": scope });
        expect(session.isAuthenticated()).toBe(false);
        expect(session.userName).toBeUndefined();
        expect(session.userPassword).toBeUndefined();
      }));

      it("authenticates using session service and accepts valid login", function () {
//        $httpBackend.when("GET", serviceUrl + "/authenticate/test/test").respond(testSessionId);
        scope.userName = "test";
        scope.userPassword = "test";
//        $httpBackend.expectGET(serviceUrl + "/authenticate/test/test");
        scope.loginUser();
//        $httpBackend.flush();
        expect(session.isAuthenticated()).toBe(true);
        expect(session.data.userName).toBe("test");
//        expect(session.data.sessionId).toBe(testSessionId);
      });

      it("authenticates using session service and detects invalid login", function () {
//        $httpBackend.when("GET", serviceUrl + "/authenticate/a/b").respond("Failed!");
        scope.userName = "a";
        scope.userPassword = "b";
//        $httpBackend.expectGET(serviceUrl + "/authenticate/a/b");
        scope.loginUser();
//        $httpBackend.flush();
        expect(session.isAuthenticated()).toBe(false);
        expect(scope.modalTitleText).toBe("Login failed!");
      });

      it("authenticates using session service and detect invalid login (using empty result from server)", function () {
//        $httpBackend.when("GET", serviceUrl + "/authenticate/a/b").respond("");
        scope.userName = "a";
        scope.userPassword = "b";
//        $httpBackend.expectGET(serviceUrl + "/authenticate/a/b");
        scope.loginUser();
//        $httpBackend.flush();
        expect(session.isAuthenticated()).toBe(false);
        expect(scope.modalTitleText).toBe("Login failed!");
      });

      it("authenticates using session service and detect invalid login (using 401 error code received from server)", function () {
//        $httpBackend.when("GET", serviceUrl + "/authenticate/a/b").respond(401, "");
        scope.userName = "a";
        scope.userPassword = "b";
//        $httpBackend.expectGET(serviceUrl + "/authenticate/a/b");
        scope.loginUser();
//        $httpBackend.flush();
        expect(session.isAuthenticated()).toBe(false);
        expect(scope.modalTitleText).toBe("Login failed!");
      });
    });
  });
});