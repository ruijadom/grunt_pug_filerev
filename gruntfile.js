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
    pugUsemin: {
      scripts: {
        options: {
          tasks: {
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
    'pugUsemin'
  ]);
}