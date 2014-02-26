module.exports = function (grunt) {
  grunt.initConfig({
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': ['app/templates/index.html', 'app/templates/*.html', 'app/controllers/*.js']
        }
      },
    },
    nggettext_compile: {
      all: {
        files: {
          'app/translations.js': ['po/*.po']
        }
      },
    },
    less: {
      development: {
        options: {
          paths: ["content"]
        },
        files: {
          "content/app.css": "content/app.less"
        }
      },
      production: {
        options: {
          paths: ["content"],
          cleancss: true
        },
        files: {
          "content/app.css": "content/app.less"
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: 'app',
          baseUrl: '.',
          paths: {
            scripts: 'scripts'
          },
          dir: 'app-built',
          mainConfigFile: 'app/config.js',
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
        }
      }
    },
    preprocess: {
      development: {
        src: './app/templates/index.html',
        dest: './index.html',
        options: {
          context: {
            DEBUG: true
          }
        }
      },

      production: {
        src: './app/templates/index.html',
        dest: './index.html',

        options: {
          context: {
            DEBUG: false
          }
        }
      }
    },
    jasmine: {
      test: {
//        src: ['app/**/*.js', 'scripts/**/*.js'],
        src: ['app/app.js'],
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: 'app/config.js'
          }
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.unit.conf.js'
      }
    },
    protractor_webdriver: {
      e2e: {
        // Target-specific file lists and/or options go here.
      },
    },
    protractor: {
      options: {
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: true, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      e2e: {
        options: {
          configFile: "e2e.conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    }
  })

  grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('Release', ['less:production', 'requirejs', 'preprocess:production']);
  grunt.registerTask('Debug', ['nggettext_extract', 'nggettext_compile', 'less:development', 'requirejs', 'preprocess:development']);
  grunt.registerTask('Test', ['karma:unit']);
//  grunt.registerTask('e2e', ['protractor_webdriver:e2e', 'protractor:e2e']);
  grunt.registerTask('e2e', ['protractor:e2e']);
};
