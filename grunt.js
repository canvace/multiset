module.exports = function (grunt) {

	grunt.initConfig({
		meta: {
			version: '1.0',
			banner: '/*! MultiSet.js - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* http://www.canvace.com/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
				'Canvace Srl */',
		},

		min: {
			dist: {
        			src: ['<banner:meta.banner>',
				      '<file_strip_banner:src/MultiSet.js>'],
				dest: 'bin/multiset.js',
			},
		},
	});

	grunt.registerTask('default', 'min');

};
