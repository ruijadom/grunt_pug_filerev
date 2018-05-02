module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      tests: ['dist']
    },
    filerev: {
      pugUsemin: {
        options: {
          noDest: true
        }
      }
    },
    concat: {
      lib: {
        src: 'lib/jquery/dist/jquery.js',
        dest: 'dist/js/vendor.js'
      },
      js: {
        src: 'public/js/*.js',
        dest: 'dist/js/scripts.js'
      },
      css: {
        src: 'public/css/*.css',
        dest: 'dist/css/style.css'
      }
    },
    pugUsemin: {
      scripts: {
        options: {
          tasks: {
            lib: ['concat', 'uglify', 'filerev'],
            js: ['concat', 'uglify', 'filerev'],
            css: ['concat', 'cssmin', 'filerev']
          },
          dirTasks: ['filerev'],
        },
        files: [{
          dest: './dist/layout.pug',
          src: './views/layout.pug'
        }]
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-pug-usemin');
  grunt.loadNpmTasks('grunt-filerev');

  grunt.registerTask('build', [
    'clean',
    'concat',
    'pugUsemin'
  ]);
}