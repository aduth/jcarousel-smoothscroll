'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.name %> <%= pkg.version %> | Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.license %> License */\n',

    concat: {
      options: {
        stripBanners: {
          block: true
        },
        banner: '<%= banner %>'
      },
      dist: {
        src: [ 'jquery.jcarousel-smoothscroll.js' ],
        dest: 'jquery.jcarousel-smoothscroll.js'
      }
    },

    watch: {
      js: {
        files: [ 'jquery.jcarousel-smoothscroll.js' ],
        tasks: [ 'compile' ]
      }
    },

    uglify: {
      dist: {
        files: {
          'jquery.jcarousel-smoothscroll.min.js': [ 'jquery.jcarousel-smoothscroll.js' ]
        },
        options: {
          banner: '<%= banner %>'
        }
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('compile', [ 'concat', 'uglify' ]);
  grunt.registerTask('default', [ 'compile' ]);
  grunt.registerTask('dev', [ 'watch' ]);

};
