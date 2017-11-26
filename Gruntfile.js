'use strict';

var path = require('path');

module.exports = function(grunt) {

   var pkg = grunt.file.readJSON('package.json'),
       config;

   config = {
      js: {
         all: [ 'Gruntfile.js', 'src/**/*.js', 'tests/**/*.js', '!**/node_modules/**/*' ],
      },

      dist: {
         base: path.join(__dirname, 'dist'),
      },
   };

   config.dist.js = {
      bundle: path.join(config.dist.base, '<%= pkg.name %>.js'),
      minified: path.join(config.dist.base, '<%= pkg.name %>.min.js'),
   };

   grunt.initConfig({

      pkg: pkg,
      config: config,

      browserify: {
         main: {
            src: '<%= pkg.main %>',
            dest: config.dist.js.bundle,
            options: {
               browserifyOptions: {
                  standalone: 'MediaPlayer',
               },
            },
         },
      },

      uglify: {
         main: {
            files: {
               '<%= config.dist.js.minified %>': config.dist.js.bundle,
            },
            options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.version %> */\n',
               sourceMap: true,
               sourceMapIncludeSources: true,
               mangle: true,
               compress: true,
               beautify: false,
            },
         },
      },

      eslint: {
         target: config.js.all,
      },

      watch: {
         rebuild: {
            files: [ '<%= config.js.all %>' ],
            tasks: [ 'build-js' ],
         },
      },

   });

   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-eslint');

   grunt.registerTask('standards', [ 'eslint' ]);
   grunt.registerTask('default', [ 'standards' ]);
   grunt.registerTask('build-js', [ 'browserify', 'uglify' ]);
   grunt.registerTask('build', [ 'default', 'build-js' ]);

};
