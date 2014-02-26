define([
    "console"
  , "./module"
], function (console, filters) {
  console.debug("Registering checkmark filter...")
  filters.filter('CheckmarkFilter', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  });
})
