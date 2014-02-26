// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // base path, note that this is expected to be ran under build directory
    basePath: '.',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
        { pattern: 'app/**/*.js', included: false },
        { pattern: 'test/unit/*Spec.js', included: false },
        { pattern: 'scripts/**/*.js', included: false },
        { pattern: 'test/test-init.js', included: false },
        'test/test-config.js',
    ],

    // list of files / patterns to exclude
    exclude: [
      'app/config.js',
    ],

    // web server port
    port: 9898,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // enable / disable colors in the output (reporters and logs)
    colors: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ["Chrome"],
//    browsers: ["Chrome", "Firefox", "Opera", "IE"],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
