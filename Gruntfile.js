module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.initConfig({
	  bower: {
	    install: {
	       options: {
	        targetDir: './static/lib',
	        layout: 'byComponent',
	        install: true,
	        verbose: true,
	        cleanTargetDir: true,
	        cleanBowerDir: true,
	        bowerOptions: {}
	      }
	    }
	  }
  });

  grunt.registerTask('default', ['bower:install'])
};