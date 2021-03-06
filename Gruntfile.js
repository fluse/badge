module.exports = function(grunt) {

    'use strict';

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
	  sass: {
	      dist: {
	        files: {
	            'badge.css': 'badge.scss'
	        }
	      }
	  },
	  cssmin: {
	    min: {
	      src: 'badge.css',
	      dest: 'badge.min.css'
	    }
	  }
	});

	grunt.registerTask('style', ['sass']);
  	grunt.registerTask('default', ['sass', 'cssmin']);
};
