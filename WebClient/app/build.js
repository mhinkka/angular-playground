({
  appDir: '.',
  baseUrl: '.',
  paths: {
    scripts: '../scripts'
  },
  dir: '../app-built',
  mainConfigFile: 'config.js',
  optimize: "uglify",
//  optimize: "none",
  modules: [
      //First set up the common build layer.
      {
        //module names are relative to baseUrl
        name: 'config',
        //List common dependencies here. Only need to list
        //top level dependencies, "include" will find
        //nested dependencies.
        include: [
          "jquery", "console", "underscore", "underscore.string", "angular",
          "angular-resource", "angular-route", "angular-animate", "angular-gettext", 
          "bootstrap", "modernizr"
        ]
    }
  ]
})
