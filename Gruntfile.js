module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    copy: {
      files: {
        expand: true,
        cwd: 'node_modules/jquery-mask-plugin/dist/',
        src: ['jquery.mask.min.js'],
        dest: 'public/lib/'
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded',
        sourceComments: true
      },
      dist: {
        files: {
          'public/css/style.css': 'public/scss/style.scss'
        }
      }
    },
    // Run this beauty (grunt watch) to automatically compile you scss files everytime you save
    watch: {
      scripts: {
        files: ['public/scss/*.scss', 'public/scss/*/*.scss'],
        tasks: ['sass']
      }
    }
  })

  grunt.registerTask('default', ['sass', 'copy'])
}
