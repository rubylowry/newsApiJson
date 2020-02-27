module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },
    watch: {
      all: {
        files: ['sass/style.scss', 'css/style.css', 'js/script.js'],
        tasks: ['sass','csslint','jshint']
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss'    // 'destination': 'source'

      }
      }
    },
    csslint: {

      lax: {
        options: {
          import: false,
          'order-alphabetical' :false
        },
        src: ['css/*.css','!*.min.css']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-csslint');
     grunt.loadNpmTasks('grunt-contrib-jshint');



  // Default task(s).
    grunt.registerTask('ugly', ['uglify']);
    grunt.registerTask('default', ['watch']); //run this using grunt test

};
