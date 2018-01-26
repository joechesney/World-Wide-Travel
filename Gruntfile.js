module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      files: ['app/**/*.js'],
      options: {
        predef: ['document', 'console', 'alert', '$', 'angular'],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['app/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['templates/**/*.hbs']
      }
    },
    browserify: {
      'dist/bundle.js': ['app/app.js'],
      options: {
        transform: ['hbsfy'],
      }
    }
  });
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);
}