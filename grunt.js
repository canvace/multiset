module.exports = function (grunt) {
	grunt.initConfig({
		meta: {
			version: '1.0.0',
			banner: '/*! MultiSet.js - v<%= meta.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Part of the Canvace technology, http://www.canvace.com/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> Canvace Srl */',
		},
		min: {
			dist: {
				src: [
					'<banner:meta.banner>',
					'<file_strip_banner:src/MultiSet.js>'
				],
				dest: 'bin/multiset-<%= meta.version %>.min.js'
			}
		},
		lint: {
			dist: 'src/MultiSet.js'
		},
		jshint: {
			options: {
				camelcase: true,
				curly: true,
				immed: true,
				indent: 4,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				boss: true,
				debug: true,
				expr: true,
				loopfunc: true,
				multistr: true,
				smarttabs: true,
				supernew: true,
				node: true
			},
			globals: {
				Canvace: false
			}
		}
	});
	grunt.registerTask('default', 'lint min');
};
